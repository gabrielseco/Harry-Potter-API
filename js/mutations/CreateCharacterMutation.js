import Relay from "react-relay";

class CreateCharacterMutation extends Relay.Mutation {
  getMutation() { // return the graphQL operation for the mutation we need to envoke
    return Relay.QL` 
      mutation { createCharacter }
    `;
  };
  getVariables() { //prepare variables needed for the mutation
    return {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      middleName: this.props.middleName,
      dob: this.props.dob, 
      gender: this.props.gender,
    }
  };
  getFatQuery() { // plan for future - everything that could be affected
    return Relay.QL`
      fragment on CreateCharacterPayload {
        characterEdge,
        store { characterConnection }
      }
    `;
  };
  getConfigs() { //instructions given Relay on how to handle the response from server (CRUD)
    return [{
      type: 'RANGE_ADD',
      parentName: 'store',
      parentID: this.props.store.id,
      connectionName: 'characterConnection',
      edgeName: 'characterEdge',
      rangeBehaviors: { // a map between a certain state for our connection and the operation we want relay to do for that state
        '': 'append',
      }
     }];
  };
}

export default CreateCharacterMutation