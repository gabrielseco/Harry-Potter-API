import React from 'react';

export default class RadioInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let options = this.props.input.options.map( (option, idx) => {
      return (
        <label key={idx}>
          <input type='radio'
                 id={option}
                 className="form-control"
                 name={this.props.input.name}
                 value={option} /> 
            {option}
        </label>
      )
    });
    return (
      <div className="radio">
        <label htmlFor={this.props.input.name} className='col-sm-3 control-label'>
          {this.props.input.label}
        </label>
        <div className='col-sm-9 radio'>
          {options}
        </div>
      </div>
    )
  }
}