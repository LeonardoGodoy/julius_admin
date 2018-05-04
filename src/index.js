import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise'

import App from './components/app';
import SalesIndex from './containers/sales_index';
import SalesShow from './containers/sales_show';

import CustomersIndex from './containers/customers_index';

import reducers from './reducers';

import Menu from './components/menu';


import { Input } from 'semantic-ui-react';
import { Dimmer, Loader, Image, Segment, Form, Field } from 'semantic-ui-react'


import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000/graphql", headers: { Authorization: 'hey hey hey' } }),
  cache: new InMemoryCache(),
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Menu/>

        <div>
          <ApolloProvider client={client}>
            <Switch>
              <Route path='/sales/:id' component={SalesShow} />
              <Route path='/sales' component={SalesIndex} />
              <Route path='/customers' component={CustomersIndex} />
              <Route path='/' component={App} />
            </Switch>
          </ApolloProvider>,
        </div>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

  ReactDOM.render( <App />, document.getElementById('app'));
