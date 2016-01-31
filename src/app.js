import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegisterPage, MySubmissionsPage, NewSubmissionPage, ReviewSubmissionsPage, GraphQL, HowCanIUseThis, WhatIsThis } from './pages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <LogoutRoute path='/logout' />
      <Route path='/register' component={RegisterPage} />
      <Route path='/reviewSubmissionsPage' component={ReviewSubmissionsPage} />
      <AuthenticatedRoute path='/mySubmissionsPage' component={MySubmissionsPage} />
      <AuthenticatedRoute path='/newSubmissionPage' component={NewSubmissionPage} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);

// import Relay from 'react-relay';

// import Main from './components/Main';

// RELAY STUFF

// class AppRoute extends Relay.Route {
//   static routeName = 'App';
//   static queries = {
//     store: (Component) => Relay.QL`
//       query MainQuery {
//         store { ${Component.getFragment('store') } }
//       }
//     `
//   };
// }

// ReactDOM.render(
//   <Relay.RootContainer
//     Component={Main}
//     route={new AppRoute() }
//   />,
//   document.getElementById('react')
// );
