import dotenv from 'dotenv'; dotenv.config();
import Express from 'express';
import http from 'http';
import router from './router';
import webpack from 'webpack'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = new Express();
const port = 3000, redirectPort = 3001;
const NODE_ENV = process.env.NODE_ENV;

if( NODE_ENV === 'local' ){
  const config = require(`./cfg/local`)
  const compiler = webpack( config );
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(
    webpackDevMiddleware( compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));
  app.use( webpackHotMiddleware( compiler ))
}

const compress = require('compression');
app.use( compress() );
app.use( cookieParser() );
app.use( bodyParser.urlencoded({ extended:false }) );
app.use( bodyParser.json({ limit:'1mb' }) );
app.use( router() );

// Get App Components, Providers
import React from 'react';
import configureStore from 'SpiritOS/config/configureStore'
import configureApolloClient from 'SpiritOS/config/configureApolloClient'
import { StaticRouter, Route } from 'react-router-dom';
import { ApolloProvider, renderToStringWithData } from "react-apollo";
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'react-redux'
import { App } from 'SpiritOS/Components';

app.use( handleRequest );
function handleRequest( req, res ){
  const context = {};
  const initialState = { environment:{ NODE_ENV }};
  const client = configureApolloClient( null, req.cookies.token );
  const store = configureStore( initialState );
  const sheet = new ServerStyleSheet();
  if ( NODE_ENV === 'local' ){
    // Send HTML without any server side rendering
    // Not what I'd prefer to do, but a styled-components bug prevents Hot Reloads w/ SSR...
    // TODO: Figure out why styled-component classes are being scrambled by SSR
    const html = renderHTML('', {}, '', '');
    res.status(200).send( html );
  } else {
    // Wrap App with Providers/Router
    const WrappedApp =
      React.createElement( ApolloProvider, { client },
        React.createElement( Provider, { store },
          React.createElement( StaticRouter, { location:req.url, context }, // React Router ServerSide wrap
              React.createElement( Route, { path:'/', component:App })
    )));
    // Bootstrap App using React Apollo's handy renderToStringWithData
    renderToStringWithData( WrappedApp ).then( content => {
      if ( context.redirectUrl ){
        res.redirect( 302, '/' );
      } else {
        const html = renderHTML( content, store.getState(), client.extract(), sheet.getStyleTags() );
        res.status(200).send( html );
      }
    })
  }
}

function renderHTML( content, initialState, apolloState, stylesheet ) {
  return `
    <!doctype html>
    <html lang="en" xml:lang="en">
      <head>
        <title>???</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta name="description" content="L2 Boilerplate"/>
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,600,700,800" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet" />
        <link href="https://file.myfontastic.com/EuTGP6YW2rCSNuzKG4zzAE/icons.css" rel="stylesheet">
        <link rel="icon" type="img/ico" href="/images/favicon.ico"/>
        ${ NODE_ENV === 'production' ? `<link href="/build/style.css" rel="stylesheet">` : `` }
        ${ stylesheet }
      </head>
      <body>
        <div id="App">${ content }</div>
        <script>
          window.__INITIAL_STATE__ = ${ JSON.stringify( initialState ) }
          window.__APOLLO_STATE__ = ${ JSON.stringify( apolloState ) }
        </script>
        <script src="/build/app.js"></script>
      </body>
    </html>
    `
}

app.listen( port, ( error ) => {
  error ?
    console.error( error ) :
    console.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
});

http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen( redirectPort );
