import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { 
  Router, 
  LoginRoute, 
  LogoutRoute, 
  AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, 
  IndexPage, 
  LoginPage, 
  RegisterPage, 
  VerifyEmailPage, 
  ResetPasswordPage, 
  MySubmissionsPage, 
  NewSubmissionPage, 
  ReviewSubmissionsPage, 
 } from './js/pages';

import AppRouter from './js/AppRouter';

ReactStormpath.init();

class AppRoute extends Relay.Route {
  static routeName = 'App';
  static queries = {
    store: (Component) => Relay.QL`
      query MainQuery {
        store { ${Component.getFragment('store')} }
      }
    `
  };
}

ReactDOM.render(
  <Relay.RootContainer
    Component={AppRouter}
    route={new AppRoute() }
  />,
  document.getElementById('react')
);
