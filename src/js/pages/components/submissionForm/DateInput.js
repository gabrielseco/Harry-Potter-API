import React from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (      
      <div className="date">
        <label htmlFor={this.props.input.name} className='col-sm-2 control-label'>
          {this.props.input.label}
        </label>
        <div className="col-sm-10">
          <input type='date' 
                 id={this.props.input.name} 
                 className="form-control"
          />
        </div>
      </div>
    )
  }
}