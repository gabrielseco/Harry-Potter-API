import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';
import path from 'path';

export default class GraphQL extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`GraphQL`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>GraphQL</h3>
              <hr />
            </div>
          </div>
            <iframe className="col-md-8 api" id="graphQL" src="/graphql" width="100%" height="500" />
        </div>
      </DocumentTitle>
    );
  }
}