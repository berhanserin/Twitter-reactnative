import React from 'react';
import Router from './common/Router';
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.1.105:4000',
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
