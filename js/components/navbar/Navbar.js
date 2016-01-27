import React from "react";
import Header from "./Header";

import AuthAppWrapper from '../authentication/AuthApp';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <section id="navbar">
        <div className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <AuthAppWrapper />
          </div>   
        </div>
      </section>
    )
  }
}
          // <Header navbarContent={this.props.navbarContent} />

export default Navbar
