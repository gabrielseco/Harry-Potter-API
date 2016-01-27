import AppDispatcher from '../AppDispatcher';
import { LOGIN_USER, LOGOUT_USER } from '../Constants';
import RouterContainer from '../services/RouterContainer';

let LoginActions = {
  loginUser: (jwt) => {
    let savedJwt = localStorage.getItem('jwt');

    AppDispatcher.dispatch({
      actionType: ActionTypes.LOGIN_USER,
      jwt: jwt
    });

    if (savedJwt !== jwt) {
      let nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }
  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/home');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: ActionTypes.LOGOUT_USER
    });
  }
}

export default LoginActions