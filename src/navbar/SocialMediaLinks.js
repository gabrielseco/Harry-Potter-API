import React from "react";

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    let socialMedia = this.props.socialMedia.map( (socialMediaAcct, idx) => {
      return (
        <li key={idx}>
          <a href={socialMediaAcct.link}>
            <i className={socialMediaAcct.icon}>
            </i>
          </a>
        </li>
      )
    })
    return(
      <div>
        <ul className="nav navbar-nav" id="social-media-links">
          {socialMedia}
        </ul>
      </div>
    )
  }
}

export default Navbar
