import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';

let ServerActions = {
  receiveCharacters(characters) {
    console.log('2. ServerActions has received characters')
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_CHARACTERS,
      characters: characters
    })
  }
};

export default ServerActions;