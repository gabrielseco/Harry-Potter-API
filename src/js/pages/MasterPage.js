import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';

import Header from './components/Header';


export default class MasterPage extends React.Component {
  render() {
    return (
      <DocumentTitle title='MasterPage'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
          <div className="container">
            <div className="push"></div>
          </div>

          <div className="footer">
           <p>Copyright <i className="fa fa-copyright"></i> 2016</p>
         </div>
        </div>
      </DocumentTitle>
    );
  }
}
          // <GraphQL />
          // <infoBlurb />