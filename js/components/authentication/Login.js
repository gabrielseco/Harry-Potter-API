import React from 'react';
// import addons from 'react-addons-linked-state-mixin';
// import ReactMixin from 'react-mixin';

import AuthService from '../../services/AuthService';

class Login extends React.Component {
  constructor() {
    super();
    this.setState = {
      user: '',
      password: ''
    }
  }
  login(e) {
    e.preventDefault();
    AuthService.login(this.state.user, this.state.password)
      .catch( (err) => {
        console.err('Error logging in', err);
      });
  }
  render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" 
                   valueLink={this.linkState('user')}
                   className="form-control username" 
                   placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" 
                   valueLink={this.linkState('password')}
                   className="form-control password"
                   ref="password"
                   placeholder="Password" />
          </div>
          <button className="btn btn-info"
                  type="submit"
                  onClick={this.login.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}

// ReactMixin(Login.prototype, React.addons);

export default Login;