import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

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
          </div>
          <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>New Submission</strong>
              </li>
            </ul>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}