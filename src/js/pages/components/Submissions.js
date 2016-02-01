import React from 'react';

export default class Submissions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let submissions = this.props.characters.map ( (character, charIdx) => {
      console.log(this.props.keys)
      let keys =  this.props.keys.map( (key, idx) => {
        // (character[key.name] === 'true') ? character[key.name] = 'yes' : character[key.name] = 'no'
        return (
          <li className="list-group-item" key={idx}>
            <span className='col-sm-6 col-xs-12 charLabel'>{key.label}</span>
            <span className='col-sm-6 col-xs-12'>{character[key.name]}</span>
          </li>
        )
      }) 
      return keys;     
    })
    return (
      <ul className='list-group'>
        {submissions}
      </ul>
    )
  }
}

