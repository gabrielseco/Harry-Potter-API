import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav headerLinks">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/review-submissions">Review Submissions</Link></li>
              <Authenticated>
                <li>
                  <Link to="/my-submissions">My Submissions</Link>
                </li>
              </Authenticated>
              <Authenticated>
                <li>
                  <Link to="/new-submission">New Submission</Link>
                </li>
              </Authenticated>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NotAuthenticated>
                <li>
                  <LoginLink />
                </li>
              </NotAuthenticated>
              <Authenticated>
                <li>
                  <LogoutLink />
                </li>
              </Authenticated>
              <Authenticated>
                <li>
                  <mySubmissionsPage />
                </li>
              </Authenticated>
              <NotAuthenticated>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </NotAuthenticated>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}