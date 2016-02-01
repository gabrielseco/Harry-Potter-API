import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';

// import Header from './components/Header';
// import GraphQL from './components/GraphqlIde'
// import infoBlurb from './components/infoBlurb'


export default class HomePage extends React.Component {
  render() {
    console.log(this.props.children)
    return (
      <DocumentTitle title='HomePage'>
        <div className='HomePage'>
        </div>
      </DocumentTitle>
    );
  }
}