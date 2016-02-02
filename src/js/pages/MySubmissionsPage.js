import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

import Submissions from './components/Submissions';
import characterKeys from '../../staticContent/submissions/characterKeys';

let characters = [
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "middleName": "James",
    "dob": 333921941000,
    "dod": -1,
    "gender": "male",
    "house": "Gryffindor",
    "magical": true,
    "muggleBorn": false,
    "DA": true,
    "deathEater": false,
    "specialSkills": "Defence Against the Dark Arts; Flying; Surviving Avada Kedavras",
    "occupation": "Auror",
    "wand": "11 inch Holly, phoenix feather core",
    "patronus": "Stag"
  }
]

export default class MySubmissionsPage extends UserComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DocumentTitle title={`MySubmissionsPage`}>
        <div className="container submissions">
          <div className="row">
            <h3>My Submissions</h3>
            <hr />
            <Submissions keys={characterKeys} characters={characters} />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}