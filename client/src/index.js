import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: 'http://localhost:3080'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
