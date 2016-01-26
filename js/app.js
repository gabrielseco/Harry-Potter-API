import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import Main from './components/Main';

class AppRoute extends Relay.Route {
  static routeName = 'App';
  static queries = {
    store: (Component) => Relay.QL`
      query MainQuery {
        store { ${Component.getFragment('store') } }
      }
    `
  };
}

ReactDOM.render(
  <Relay.RootContainer
    Component={Main}
    route={new AppRoute() }
  />,
  document.getElementById('react')
);
