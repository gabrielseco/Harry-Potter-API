import React from 'react';
import API from '../API';
import CharacterStore from '../stores/CharacterStore';

let _getAppState = () => {
  return { characters: CharacterStore.getAll() };
}

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    API.fetchCharacters();
    CharacterStore.on('change', this.onChange);
  }
  onChange() {
    console.log('4. Components have received characters')
    this.setState(_getAppState());
    CharacterStore.removeListener('change', this.onChange);
  }
  render() {
    let content = this.state.characters.map(character => {
      return (
        <li key={character._id}>{character.firstName} was born on {character.dob}
        </li>
      )
    })
    return (
      <div>
        <h3>Characters</h3>
        <ul>
          {content}
        </ul>
      </div>
    )

  }
}