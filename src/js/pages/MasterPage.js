import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';

import Header from './components/Header';


export default class MasterPage extends React.Component {
  render() {
    console.log(this.props.children)
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