import React from 'react';
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
 } from './pages';

class AppRouter extends React.Component {
  render() {
    return (
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
      </Router>
    )
  }
}

AppRouter = Relay.createContainer(AppRouter, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        characterConnection(first: 5) {
          edges {
            node {
              id,
              firstName
            }
          }
        }
      }
    `
  }
});

export default AppRouter;

