import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

export default class MySubmissionsPage extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`MySubmissionsPage`}>
        <div className="container submissions">
          <div className="row">
          <h3>My Submissions</h3>
          <hr />

          
            <ul className="list-group">
              <li className="list-group-item">
                <strong>First Name</strong>
                <span className="pull-right">Harry</span>
              </li>
              <li className="list-group-item">
                <strong>Last Name</strong>
                <span className="pull-right">Potter</span>
              </li>
              <li className="list-group-item">
                <strong>Middle Name</strong>
                <span className="pull-right">James</span>
              </li>
              <li className="list-group-item">
                <strong>DOB</strong>
                <span className="pull-right">MAy 1st 1999</span>
              </li>
              <li className="list-group-item">
                <strong>DOD</strong>
                <span className="pull-right">Harry never dies!</span>
              </li>
              <li className="list-group-item">
                <strong>Gender</strong>
                <span className="pull-right">Male</span>
              </li>
              <li className="list-group-item">
                <strong>House</strong>
                <span className="pull-right">Gryffindor</span>
              </li>
              <li className="list-group-item">
                <strong>Magical</strong>
                <span className="pull-right">True</span>
              </li>
              <li className="list-group-item">
                <strong>Muggle Born</strong>
                <span className="pull-right">False</span>
              </li>
              <li className="list-group-item">
                <strong>Death Eater</strong>
                <span className="pull-right">False</span>
              </li>
              <li className="list-group-item">
                <strong>Special Skills</strong>
                <span className="pull-right">Defence Against the Dark Arts; Flying; Surviving Avada Kedavras</span>
              </li>
              <li className="list-group-item">
                <strong>Occupation</strong>
                <span className="pull-right">auror</span>
              </li>
              <li className="list-group-item">
                <strong>Wand</strong>
                <span className="pull-right">11 inch Holly, phoenix feather core</span>
              </li>
              <li className="list-group-item">
                <strong>Patronus</strong>
                <span className="pull-right">doe</span>
              </li>
            </ul>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}