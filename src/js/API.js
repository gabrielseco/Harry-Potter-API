import { post } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
  fetchCharacters() {
    console.log("1. API has made a post for characters");
    post('/graphql', {
      query: `{
        characters {
          _id
          firstName
          dob
        }
      }`
    }).done (resp => {
      ServerActions.receiveCharacters(resp.data.characters);
    })
  }
}

export default API;