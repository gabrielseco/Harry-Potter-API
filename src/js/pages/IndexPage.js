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
      </div>
    );
  }
}