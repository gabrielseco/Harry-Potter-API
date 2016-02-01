import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

import NewSubmissionForm from './components/submissionForm/NewSubmissionForm';
import characterForm from '../../staticContent/forms/characterForm';

export default class NewSubmissionPage extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`NewSubmissionPage`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>New Submission Page</h3>
              <hr />
            </div>
            <NewSubmissionForm formType={characterForm} />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}