import React from "react";
import Header from "./Header";
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <section id="navbar">
        <div className="navbar navbar-default">
           <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                </ul>
                <Authenticated>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </Authenticated>
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
                </ul>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <AuthAppWrapper />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
          // <Header navbarContent={this.props.navbarContent} />

export default Navbar
