import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

export default class WhatIsThis extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`WhatIsThis`}>
        <div className="container">
          <div className="row pad_bot">
            <div className="col-sm-1 col-lg-1 col-md-1">
              <div className="col-sm-3 col-lg-3 col-md-3">
                <h3 className="center">What Is This?</h3>
                  <p>The Harry Potter API, or '"HP-API"' is the first data source that allows fans to add information into the database.  The information that you sumbit will be verified by Harry Potter fans who use this site and permantly remain on the database.  </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}