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
        {inputs}
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}