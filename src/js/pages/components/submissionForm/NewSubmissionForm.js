import React from 'react';

import TextInput from './TextInput';
import RadioInput from './RadioInput';
import DateInput from './DateInput';


export default class NewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let inputs = this.props.formType.map( (input, idx) => {
      switch (input.type) {
        case 'text':
          return(
            <div className='form-group' key={idx}>
              <TextInput input={input} />
            </div>
          )
          break;
        case 'date':
          return(
            <div className='form-group' key={idx}>
              <DateInput input={input} />
            </div>
          )
          break;
        case 'radio':
          return(
            <div className='form-group' key={idx}>
              <RadioInput input={input} />
            </div>
          )
          break;
      }
    })
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="firstName" className="col-sm-2 control-label">First Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="firstName" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="col-sm-2 control-label">Last Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="lastName" placeholder="Password" />
          </div>
        </div>
        {inputs}


      {/*submit button*/}
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}