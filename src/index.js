import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise'
import reducers from './reducers';

import App from './components/app';
import Menu from './components/layout/menu';

import Lab from './components/lab';

import SalesIndex from './containers/sales_index';
import SalesShow from './containers/sales_show';

import ProductsIndex from './components/products/index';
import ProductsNew from './components/products/new';

import CustomersNew from './components/customers/new';
import CustomersIndex from './components/customers/index';

import ContractsIndex from './components/contracts/index';


import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000/graphql", headers: { Authorization: '355fb6d2844fe9642c689140c7bdf127' } }),
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
              <Route path='/lab' component={Lab} />
              <Route path='/sales/:id' component={SalesShow} />
              <Route path='/sales' component={SalesIndex} />
              <Route path='/products/new' component={ProductsNew} />
              <Route path='/products' component={ProductsIndex} />
              <Route path='/customers/new' component={CustomersNew} />
              <Route path='/customers' component={CustomersIndex} />
              <Route path='/contracts' component={ContractsIndex} />

              <Route path='/' component={App} />
            </Switch>
          </ApolloProvider>
        </div>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

  ReactDOM.render( <App />, document.getElementById('app'));
