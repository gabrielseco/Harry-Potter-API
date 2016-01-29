import React from "react";
// import SocialMediaLinks from "./SocialMediaLinks";
// import SectionLinks from "./SectionLinks";
// import content from "../../../data/navbarContent";
import Header from "./Header";

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
          </div>   
          <Header />
        </div>
      </section>
    )
  }
}

export default Navbar
