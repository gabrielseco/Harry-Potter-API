import React from "react";

class Headline extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <section className="row" >
        <div className="row">
          <p className="col-md-4 headline">{this.props.data.title}</p>
          <div className="on">
            <p className="col-md-4 headlineContent">{this.props.data.content}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Headline