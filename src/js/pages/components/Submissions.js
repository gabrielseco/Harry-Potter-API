import React from 'react';

export default class Submissions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('sample submission', this.props.submissions)
    let submissions = this.props.submissions.map( (submission, idx) => {
      return (
        <div className='submission' key={idx}>
          awesome submissions
          {/*display info for each submission*/}
          Name: Harry

        </div>


      )
    })
    return (
      <div>
        {submissions}
      </div>
    )
  }
}