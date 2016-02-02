import React from 'react';
import moment from 'moment';

import Submission from './Submission';

export default class Submissions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let submissions = this.props.characters.map ( (character, idx) => {
      return (
        <div key={idx} className=' submission' >
          <Submission character={character} keys={this.props.keys} />
          <p className='col-sm-4 charLabel'>Is this data accurate?</p>
          <button className='btn btn-responsive'>Yes</button>
          <button className='btn btn-responsive'>No</button>
        </div>
      )
    })
    return (
      <div className='col-xs-12 row' id='allSubs'>
        {submissions}
      </div>
    )
  }
}

