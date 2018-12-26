import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch'
import Cookie from 'js-cookie'

const configureApolloClient = ( apolloState:any, token = null ) => {
  const withToken = setContext(( request, previousContext ) => ({
    headers: { authorization: `Bearer ${token || Cookie.get('token') || '' }` }
  }));
  return new ApolloClient({
    ssrMode:true,
    link: withToken.concat(new HttpLink({
      uri: `${process.env.GATEWAY_URL}/graphql`,
      fetch
    })),
    cache: apolloState ?
      new InMemoryCache().restore( apolloState ) :
      new InMemoryCache()
  });
}

export default configureApolloClient
