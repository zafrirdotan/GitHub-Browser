import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ReposPage from './pages/repos/Repos';
import RepoDetailsPage from './pages/RepoDetails/RepoDetails';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect path="/" to="/repos" exact />
        <Route path="/repos" component={ReposPage} history={history} />
        <Route path="/repo/:id" component={RepoDetailsPage} history={history} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
