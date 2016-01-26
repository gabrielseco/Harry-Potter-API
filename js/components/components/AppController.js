import React from "react";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import navbarContent from "../../data/navbarContent";
import dailyProphetContent from "../../data/dailyProphetContent";


class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    let randomIdx = (Math.floor(Math.random() * dailyProphetContent.issues.length));
    let todaysIssue = dailyProphetContent.issues[randomIdx];
    let todaysHeadline = todaysIssue.headline;
    let todaysQuidditch = todaysIssue.quidditch;
    let todaysNavbar = todaysIssue.issueDate;

    return(
      <div className="container">
        <Navbar links={navbarContent} dailyProphet={todaysNavbar} />
        <Home headline={todaysHeadline} quidditch={todaysQuidditch} />
      </div>
    )
  }
}

export default AppController
