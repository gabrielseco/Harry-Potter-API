import React from "react";

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    let sections = this.props.sections.map( (section, idx) => {
      return (
        <li key={idx}>
          <a href={section.link}>{section.name}</a>
        </li>
      )
    })
    return(
      <div>
        <ul className="nav navbar-nav navbar-right">
          {sections}
        </ul>
      </div>
    )
  }
}

export default Navbar
