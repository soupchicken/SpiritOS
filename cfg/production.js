const path = require('path');
const webpack = require('webpack');
const appPath = path.resolve('SpiritOS')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    name:'app',
    mode:'production',
    entry: ['babel-polyfill', './SpiritOS/index.tsx'],
    output: {
      path: path.resolve('build'),
      filename: 'app.js',
      publicPath: 'build'
    },
    resolve: {
      alias:{
        images: path.resolve('images'),
        SpiritOS: path.resolve('SpiritOS'),
        shared: path.resolve('shared')
      },
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        { // Try to bootstrap image as base64, fallback to file-loader
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url-loader',
          options: {
            limit:8192,
            fallback:'file-loader',
            name:'[name].[ext]',
            publicPath: '/build/'
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader','sass-loader']
          })
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: appPath
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV','GATEWAY_URL']),
      new ExtractTextPlugin("style.css")
    ]
  },
  {
    name:'server',
    devtool: 'none',
    mode:'production',
    entry: './server.js',
    output: {
      path: path.resolve('build'),
      filename: 'server.js',
      publicPath: 'build'
    },
    resolve: {
      alias:{
        images: path.resolve('images'),
        SpiritOS: path.resolve('SpiritOS'),
        shared: path.resolve('shared')
      },
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    target:'node',
    externals:[
      nodeExternals()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: appPath
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV','GATEWAY_URL']),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
  }
]
