import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

// import ApiInterface from './ApiInterface'
import Header from './Header';
import { LoginLink } from 'react-stormpath';

export default class MasterPage extends React.Component {
  render() {
    return (
      <DocumentTitle title='Stormpath Express + React Example'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
          <section className="row">
        <div className="row">
          <iframe className="col-md-8 api" src="http://localhost:3000/graphql" width="100%" height="500" />
        </div>
      </section>
        </div>
      </DocumentTitle>
    );
  }
}