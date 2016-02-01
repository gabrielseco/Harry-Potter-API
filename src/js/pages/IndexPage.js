import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
          // <pre><code> 
          //   query {
          //     store {
          //       characterConnection(first: 3) {
          //         edges {
          //           node {
          //             name
          //             specialSkills
          //           }
          //         }
          //       }
          //     }
          //   }
          // </code></pre>
  render() {
    return (
      <div className="container">
      <h1 className="header"> The Harry Potter Api</h1>
        <hr />
        <div className="jumbotron">
          <p>Welcome to the Harry Potter API!</p>
          <p>A GraphQL API that gives access to user generated Harry Potter data - written and verified by fans.  </p>
          <p>Try this query: </p>

        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>GraphQL</h3>
              <hr />
            </div>
          </div>
            <iframe className="col-md-8 api" id="graphQL" src="http://localhost:3000/graphql" width="100%" height="500" />
          </div>

          <div className="container bottomInfo">
            <div className="row pad_bot">
              <div className="col-sm-6 col-xs-12">
                <h3 className="center">Are you a developer?</h3>
                <p>HP-API (or 'happi') is a graphQL API that let's you get exactly the information that you need - no more and no less.  You can play around in the IDE and explore the data.  At the moment, only a character schema is built, but spells, potions and places schemas will soon join the list!  Explore graphQL, play with the API and happi creating!</p>
                <p>Collaborators are most welcome.  Reach out on github if you're interested.</p>
              </div>
              <div className="col-sm-6 col-xs-12">
                <h3 className="center">Are you a Harry Potter fan?</h3>
                <p>Help build and verify the accuracy of the data in this HP database!</p>
                <p>An application program interface, or API, lets code tinkerers build apps.  In this case, developers can use HP-API (or just 'happi') to build games and other apps using the data available here.  That's where you come in!  This is an open source database where fans like you can create data and confirm the accuracy of the data.  Register, login and start adding!</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}