import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

import Submissions from './components/Submissions';
import characterKeys from '../../staticContent/submissions/characterKeys';

let characters = [
  {
    "firstName": "harry",
    "lastName": "potter",
    "middleName": "james",
    "dob": 333849600,
    "dod": -1,
    "gender": "male",
    "house": "gryffindor",
    "magical": true,
    "muggleBorn": false,
    "DA": true,
    "deathEater": false,
    "specialSkills": "Defence Against the Dark Arts; Flying; Surviving Avada Kedavras",
    "occupation": "auror",
    "wand": "11 inch Holly, phoenix feather core",
    "patronus": "stag"
  }
]

export default class ReviewSubmissionsPage extends UserComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DocumentTitle title={`ReviewSubmissionsPage`}>
        <div className="container submissions">
          <div className="row">
            <h3>Review Submissions</h3>
            <hr />
            <Submissions keys={characterKeys} characters={characters} />
          </div>  
        </div>
      </DocumentTitle>
    );
  }
}

