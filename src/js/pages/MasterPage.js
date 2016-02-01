import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';

import Header from './components/Header';
import GraphQL from './components/GraphqlIde'
import infoBlurb from './components/infoBlurb'


export default class MasterPage extends React.Component {
  render() {
    return (
      <DocumentTitle title='Stormpath Express + React Example'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}
          // <GraphQL />
          // <infoBlurb />