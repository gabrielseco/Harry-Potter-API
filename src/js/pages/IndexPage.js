import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
      <h1 className="header"> The Harry Potter Api</h1>
        <hr />
        <div className="jumbotron">
          <p>
            <strong>Welcome to our Harry Potter API!</strong>
          </p>
          <p>Ready to begin? Follow the steps below so you can begin adding data into the database:</p>
          <ol className="lead">
            <li><Link to="/register">Registration</Link></li>
            <li><LoginLink /></li>
            <li><Link to="/reviewSubmissionsPage">Submissions</Link></li>
            <li><Link to="/mySubmissionsPage">My Submissions</Link></li>
          </ol>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>GraphQL</h3>
              <hr />
            </div>
          </div>
            <iframe className="col-md-8 api" id="graphQL" src="http://localhost:3000/graphql" width="100%" height="500" />
          </div>

          <div className="container bottomInfo">
            <div className="row pad_bot">
              <div className="col-sm-6 col-xs-12">
                <h3 className="center">What Is This?</h3>
                <p>The Harry Potter API, or "HP-API" is the first data source that allows fans to add information into the database.  The information that you sumbit will be verified by Harry Potter fans who use this site and permantly remain on the database.</p>
              </div>
              <div className="col-sm-6 col-xs-12">
                <h3 className="center">How Can I Use This?</h3>
                <p>The HP-API database is generated soley by our users of the site who have registered.  If you would like to just view the data, feel free to check out our Submissions.</p>
                <p>If you would like to start entering submissions into the data base, follow the steps listed in our directions up at the top of the page.  Once you have registered an account, you are able to submit data.  After submitting data that is approved by other users on the database, you will be given permission to also authorize other users submissions.
                  </p>
              </div>
              <br />
              <br />
              <p className='col-xs-12 center'>Thank you for visiting our site, we hope you enjoy!</p>
            </div>
          </div>
        </div>
    );
  }
}