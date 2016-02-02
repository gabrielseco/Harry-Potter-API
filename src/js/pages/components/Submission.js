import React from 'react';
import moment from 'moment';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let keys =  this.props.keys.map( (key, idx) => {
      let value = this.props.character[key.name];
      switch (typeof value) {
        case 'boolean':
          value = value.toString();
        break;
        case 'number':
          if (value === -1) {
            value = `Pffft... ${this.props.character.firstName} isn't dead yet.`
          } else {
            value = moment(value).format('MMMM Do YYYY')
          } 
        break;
      }
      return (
        <div className='row' key={idx}>
          <p className='col-sm-4 col-xs-12 charLabel'>{key.label}</p>
          <p className='col-sm-8 col-xs-12'>{value}</p>
        </div>
      )
    })
    return (
      <div>
        {keys}
      </div>
    )
  }
}