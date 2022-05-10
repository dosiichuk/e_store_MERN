import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Layout from './components/views/Layout/Layout';
import { Home } from './components/pages/Home/Home';

import './styles/global.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/post/add' component={Home} />
          <Route exact path='/post/myposts' component={Home} />
          <Route exact path='/post/:id' component={Home} />
          <Route exact path='/post/:id/edit' component={Home} />

          <Route path='*' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export { App };
