import request from 'reqwest';
import when from 'when';

import { LOGIN_URL, REGISTER_URL } from '../Constants';
import LoginActions from '../actions/LoginActions';

class AuthService {
  login(username, password) {
    return this.handleAuth(when(req({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: { username, password }
    })));
  }
  logout() {
    LoginActions.logoutUser();
  }
  register(username, password) {
    return this.handleAuth(when(req({
      url: REGISTER_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: { username, password }
    })))
  }
  handleAuth(loginPromise) {
    return loginPromise
      .then(function(res) {
        let jwt = res.id_token;
        LoginActions.loginUser(jwt);
        return true;
      })
  }
}

export default new AuthService();