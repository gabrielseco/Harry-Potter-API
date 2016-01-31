import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

export default class ReviewSubmissionsPage extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`ReviewSubmissionsPage`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Submissions</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                <strong> Submission</strong>
              </li>
            </ul>
          </div>
           <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                <strong> Submission</strong>
              </li>
            </ul>
          </div>
           <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                <strong> Submission</strong>
              </li>
            </ul>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}