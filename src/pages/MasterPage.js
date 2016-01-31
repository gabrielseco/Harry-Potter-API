import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

// import ApiInterface from './ApiInterface'
import Header from './Header';
import GraphQL from './GraphQL'
import HowCanIUseThis from './HowCanIUseThis'
import WhatIsThis from './WhatIsThis'

import { LoginLink } from 'react-stormpath';

export default class MasterPage extends React.Component {
  render() {
    return (
      <DocumentTitle title='Stormpath Express + React Example'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
          <GraphQL />
          <WhatIsThis />
          <HowCanIUseThis />
        </div>
      </DocumentTitle>
    );
  }
}