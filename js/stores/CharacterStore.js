import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _characters = [];

class CharacterStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case ActionTypes.RECEIVE_CHARACTERS:
          console.log('3. Store has received characters')
          _characters = action.characters;
          this.emit('change');
          break;
        default:
          // do nothing
      }
    });
  }
  getAll() {
    return _characters;
  }
}

export default new CharacterStore();