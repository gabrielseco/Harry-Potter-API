import React from 'react';
// import ReactDOM from 'react-dom';
// import Relay from 'react-relay';
import Router, {Route} from 'react-router';

import AuthApp from './components/authentication/AuthApp';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Home from './components/home/Home';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';
// import AuthAppWrapper from './components/authentication/AuthAppWrapper';
// import Main from './components/Main';

var routes = (
  <Route handler={AuthApp}>
    <Route name="login" handler={Login}/>
    <Route name="register" handler={Register}/>
    <Route name="home" path='/' handler={Home}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) LoginActions.loginUser(jwt);

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('react'));
});


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
