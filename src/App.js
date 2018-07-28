import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import './App.css';
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPenSquare, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faPenSquare, faMars, faVenus);

const cors = require('cors');

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});


const App = () => (
  <ApolloProvider client={client}>
  	<Routes />
  </ApolloProvider>
);

export default App;