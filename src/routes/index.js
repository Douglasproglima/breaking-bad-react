import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Header from '../components/Header';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
