import React from 'react';
import Relay from 'react-relay';

class Character extends React.Component {
  render() {
    let {character} = this.props;
    return (
      <li>{character.firstName} was born on {character.dob}</li>
    );
  }
}


Character = Relay.createContainer(Character, {
  fragments: {
    character: () => Relay.QL`
      fragment on Character {
        firstName,
        dob,
      }
    `
  }
});

export default Character;