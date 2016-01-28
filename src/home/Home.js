import React from "react";
import ApiInterface from "./ApiInterface"
import Headline from "./Headline"
import MovingHeadline from "./MovingHeadline"
import Quidditch from "./Quidditch"
// import dailyProphetContent from "../../../data/dailyProphetContent";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    console.log(this.props.quidditch);
    return(
      <section id="home">
        <div className="container">
        <div className="graphQLRow">
          <Headline className="col1" data={this.props.headline} />
          <ApiInterface className="col2" />
        </div>
          <div className="row">
            <Quidditch className="col-md-3 quidTitle" data={this.props.quidditch}/>
          </div>
        </div>
      </section>
    )
  }
}
          // <Header data={this.props.headline}/>

export default Home
