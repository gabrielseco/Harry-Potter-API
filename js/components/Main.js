import React from 'react';
import Relay from 'react-relay';

import Character from './Character';
import CreateCharacterMutation from "../mutations/CreateCharacterMutation";

class Main extends React.Component {
  setLimit = (e) => {
    let newLimit = Number(e.target.value);
    this.props.relay.setVariables({limit: newLimit})
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //mutation
    Relay.Store.commitUpdate( //takes an instance of a mutation class as an argument
      new CreateCharacterMutation({
        firstName: this.refs.newFirstName.value,
        lastName: this.refs.newLastName.value,
        middleName: this.refs.newMiddleName.value,
        dob: this.refs.newDob.value,
        gender: this.refs.newGender.value,
        store: this.props.store
      })
    );
    this.refs.newFirstName = "";
    this.refs.newLastName = "";
    this.refs.newMiddleName = "";
    this.refs.newDob = "";
    this.refs.newGender = "";
  };
  render() {
    let content = this.props.store.characterConnection.edges.map(edge => {
      return <Character key={edge.node.id} character={edge.node}/>
    })
    return (
      <div>
        <h3>Characters</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="firstName" ref="newFirstName" />
          <input type="text" placeholder="lastName" ref="newLastName" />
          <input type="text" placeholder="middleName" ref="newMiddleName" />
          <input type="text" placeholder="dob" ref="newDob" />
          <input type="text" placeholder="gender" ref="newGender" />
          <button type="submit"> Add New Character </button>
        </form>
        <select onChange={this.setLimit}
                defaulValue={this.props.relay.variables.limit}>
          <option value="4">4</option>
          <option value="10">10</option>
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
    limit: 10
  },
  fragments: { //takes a fragment, name it('store') anything, must be a function that returns a graphql query
    store: () => Relay.QL`
      fragment on Store {
        id,
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




