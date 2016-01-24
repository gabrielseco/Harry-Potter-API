import React from 'react';
import Relay from 'react-relay';

import Character from './Character';

class Main extends React.Component {
  setLimit = (e) => {
    let newLimit = Number(e.target.value);
    this.props.relay.setVariables({limit: newLimit})
  };
  render() {
    let content = this.props.store.characterConnection.edges.map(edge => {
      // TO DO: Make the li a <Link />
      return <Character key={edge.node.id} character={edge.node}/>
    })
    return (
      <div>
        <h3>Characters</h3>
        <select onChange={this.setLimit}>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <ul>
          {content}
        </ul>
      </div>
    )
  }
}

// Declare the data requirement for this component
// two arguments: the component itself and it's data requirement
Main = Relay.createContainer(Main, {
  initialVariables: {
    limit: 3
  },
  fragments: { //takes a fragment, name it('store') anything, must be a function that returns a graphql query
    store: () => Relay.QL`
      fragment on Store {
        characterConnection(first: $limit) {
          edges {
            node {
              id,
              ${Character.getFragment('character')}
            }
          }
        }
      }
    `
  }
});

export default Main;




