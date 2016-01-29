import React from "react";

export default class ApiInterface extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <section className="row">
        <div className="row">
          <iframe className="col-md-8 api" src="http://localhost:3000/graphql" width="100%" height="500" />
        </div>
      </section>
    )
  }
}

