import React from "react";

class Quidditch extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <section>
        <div className="row">
          <h3 className="col-xs-6 quidTitle">{this.props.data.headline}</h3>
          <h2 className="col-xs-6 whatIsThisTitle">What is This?</h2>
          <h2 className="col-xs-6 howCanIUseThisTitle">How can I use This?</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 img">
            <img src={this.props.data.img} />
          </div>
          <p className="col-xs-6 whatIsThisContent">The Harry Potter API or 'happi' is open source quanitified and programmatically-accessible data  from the Harry Potter book canon universe.</p>
          <p className="col-xs-6 howCanIUseThisContent">Gochujang ugh affogato fanny pack semiotics typewriter, asymmetrical YOLO banjo try-hard cray blue bottle quinoa. Distillery lomo polaroid, jean shorts selvage deep v organic 3 wolf moon blog mlkshk. </p>
        </div>
      </section>
    )
  }
}

export default Quidditch
