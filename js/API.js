import { get } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
  fetchCharacters() {
    console.log("1. API has made a GET for characters");
    get('/data/characters').done (resp => {
      ServerActions.receiveCharacters(resp);
      console.log(resp);
    })
  }
}

export default API;