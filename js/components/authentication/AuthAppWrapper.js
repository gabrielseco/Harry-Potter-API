import React from 'react';

import LoginStore from '../../stores/LoginStore';

export default (ComposedComponent) => {
  return class AuthAppWrapper extends React.Component {
    static willTransitionTo(transition) {
      if (!LoginStore.isLoggedIn()) {
        transition.redirect('/home', {}, { "nextPath": transition.path });
      }
    }
    constructor() {
      super();
      this.state = this._getLoginState();
    }
    _getLoginState() {
      return { 
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.user,
        jwt: LoginStore.jwt,
      };
    }
    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      LoginStore.addChangeListener(this.changeListener);
    }
    _onChange() {
      this.setState(this._getLoginState());
    }
    componentWillUnmount() {
      LoginStore.removeChangeLister(this.changeListener)
    }
    render() {
      return (
        <ComposedComponent 
          {...this.props}
          user={this.state.user}
          jwt={this.state.jwt}
          userLoggedIn={this.state.userLoggedIn} />
      );
    }
  } 
};