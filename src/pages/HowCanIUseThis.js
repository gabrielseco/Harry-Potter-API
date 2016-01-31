import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

export default class HowCanIUseThis extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`HowCanIUseThis`}>
        <div className="container">
          <div className="row pad_bot">
            <div className="col-sm-1 col-lg-1 col-md-1">
              <div className="col-sm-4 col-lg-4 col-md-4">
                <h3 className="center">How Can I Use This?</h3>
                  <p>"The HP-API database is generated soley by our users of the site who have registered.  If you would like to just view the data, feel free to check out our "<a href="/reviewSubmissionsPage">Submissions</a>" ." </p>
                  <p> "If you would like to start entering submissions into the data base, follow the steps listed in our directions up at the top of the page.  Once you have registered an account, you are able to submit data.  After submitting data that is approved by other users on the database, you will be given permission to also authorize other users submissions." </p>
                  <p>"Thank you for visiting our site, we hope you enjoy!"</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}