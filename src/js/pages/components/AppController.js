import React from "react";
import Relay from 'react-relay';
// import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="container">
        <Navbar />
        <h1>{this.props.relay.variables.header}</h1>
      </div>
    )
  }
}

AppController = Relay.createContainer(AppController, {
  initialVariables: {
    header: 'AppController here!'
  },
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        id,
      }
    `
  }
})

export default AppController
