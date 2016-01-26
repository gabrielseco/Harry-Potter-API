import React from "react";

class MovingHeadline extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <section className="movingHeadline">
        <div className="row">
          <img src={this.props.data.img} />
        </div>
      </section>
    )
  }
}

export default MovingHeadline
