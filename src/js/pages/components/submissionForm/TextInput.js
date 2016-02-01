import React from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="text">
        <label htmlFor={this.props.input.name} className='col-sm-3 control-label'>
          {this.props.input.label}
        </label>
        <div className="col-sm-9">
          <input type='text'
                 id={this.props.input.name}
                 className="form-control"
                 maxLength={this.props.input.options.maxlength}
                 placeholder={this.props.input.options.placeholder}
          />
        </div>
      </div>
    )
  }
}