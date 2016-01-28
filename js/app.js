import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './components/pages';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';

ReactStormpath.init();

ReactDOM.render(
  <Router history={createHashHistory({ queryKey: false })}>
  <Router history={createBrowserHistory()}>
    <Route path='/' component={MasterPage}>
    <AuthenticatedRoute path='/profile' component={ProfilePage} />
    <Route path='/register' component={RegistrationPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <LogoutRoute path='/logout' />
  </Route>
</Router>
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
