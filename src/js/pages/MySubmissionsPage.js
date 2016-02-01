import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

export default class MySubmissionsPage extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`MySubmissionsPage`}>
        <div className="container submissions">
                   <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>First Name</strong>
                <span className="pull-right">{ this.state.user.givenName }</span>
              </li>
              <li className="list-group-item">
                <strong>Last Name</strong>
                <span className="pull-right">{ this.state.user.surname }</span>
              </li>
              <li className="list-group-item">
                <strong>Middle Name</strong>
                <span className="pull-right">{ this.state.user.middleName }</span>
              </li>
              <li className="list-group-item">
                <strong>DOB</strong>
                <span className="pull-right">{ this.state.user.dob }</span>
              </li>
              <li className="list-group-item">
                <strong>DOD</strong>
                <span className="pull-right">{ this.state.user.dod }</span>
              </li>
              <li className="list-group-item">
                <strong>Gender</strong>
                <span className="pull-right">{ this.state.user.gender }</span>
              </li>
              <li className="list-group-item">
                <strong>House</strong>
                <span className="pull-right">{ this.state.user.house }</span>
              </li>
              <li className="list-group-item">
                <strong>Magical</strong>
                <span className="pull-right">{ this.state.user.magical }</span>
              </li>
              <li className="list-group-item">
                <strong>Muggle Born</strong>
                <span className="pull-right">{ this.state.user.muggleBorn }</span>
              </li>
              <li className="list-group-item">
                <strong>Death Eater</strong>
                <span className="pull-right">{ this.state.user.DA }</span>
              </li>
              <li className="list-group-item">
                <strong>Special Skills</strong>
                <span className="pull-right">{ this.state.user.specialSkills }</span>
              </li>
              <li className="list-group-item">
                <strong>Occupation</strong>
                <span className="pull-right">{ this.state.user.ocupation }</span>
              </li>
              <li className="list-group-item">
                <strong>Wand</strong>
                <span className="pull-right">{ this.state.user.wand }</span>
              </li>
              <li className="list-group-item">
                <strong>Patronus</strong>
                <span className="pull-right">{ this.state.user.patronous }</span>
              </li>
            </ul>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}