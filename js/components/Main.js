import React from 'react';
import API from '../API';
import CharacterStore from '../stores/CharacterStore';

let _getAppState = () => {
  return { characters: CharacterStore.getAll() };
}

export default class Main extends React.Component {

  // ensures that a number is passed into this.props.limit
  static propTypes = {
    limit: React.PropTypes.number
  };
  // defaults to this value, if no prop is passed
  static defaultProps = {
    limit: 2
  };

  state = _getAppState();

  componentDidMount() {
    API.fetchCharacters();
    CharacterStore.on('change', this.onChange);
  }
  onChange = () => {
    console.log('4. Components have received characters')
    this.setState(_getAppState());
    CharacterStore.removeListener('change', this.onChange);
  };
  render() {
    let content = this.state.characters.slice(0, this.props.limit).map(character => {
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





