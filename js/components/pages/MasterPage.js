import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

import Navbar from '../navbar/Navbar';

export default class is extends React.Component {
  render() {
    return (
      <DocumentTitle title='My React App'>
        <div className='MasterPage'>
          <Navbar />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}