import React from 'react';
import Relay from 'react-relay';

class Character extends React.Component {
  render() {
    let {character} = this.props;
    return (
      <li>{character.firstName} is awesome cause they rock at {character.specialSkills}</li>
    );
  }
}


Character = Relay.createContainer(Character, {
  fragments: {
    character: () => Relay.QL`
      fragment on Character {
        firstName,
        specialSkills
      }
    `
  }
});

export default Character;