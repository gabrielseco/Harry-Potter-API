import React from 'react';
// import addons from 'react-addons-linked-state-mixin';
import ReactMixin from 'react-mixin';

import AuthService from '../../services/AuthService';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    }
  }
  register(e) {
    e.preventDefault();
    AuthService.register(this.state.user, this.state.password)
      .catch( err => {
        console.error("Error Registering user", err);
      })
  }
  render() {
    return (
      <div className="register jumbotron center-block">
        <h1>Register</h1>
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
                  onClick={this.register.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

// ReactMixin(Register.prototype, React.addons)

export default Register;