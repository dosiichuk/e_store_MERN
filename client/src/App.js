import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Layout from './components/views/Layout/Layout';
import { Home } from './components/pages/Home/Home';
import { Cart } from './components/pages/Cart/Cart';
import { Product } from './components/pages/Product/Product';
import { Checkout } from './components/pages/Checkout/Checkout';
import { Login } from './components/pages/Login/Login';
import { ScrollToTop } from './components/features/ScrollToTop/ScrollToTop';

import './styles/global.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/cart/checkout' component={Checkout} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/products/:id' component={Product} />

            <Route path='*' component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export { App };
