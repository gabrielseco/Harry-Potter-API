import React from 'react';
import ReactDOM from 'react-dom';
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

ReactStormpath.init();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <LogoutRoute path='/logout' />
      <Route path='/register' component={RegisterPage} />
      <Route path='/review-submissions' component={ReviewSubmissionsPage} />
      <AuthenticatedRoute path='/my-submissions' component={MySubmissionsPage} />
      <AuthenticatedRoute path='/new-submission' component={NewSubmissionPage} />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/forgot' component={ResetPasswordPage} />

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
