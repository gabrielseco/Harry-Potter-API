import React from 'react';
// import Relay from 'react-relay';

// import CreateCharacterMutation from "../../../mutations/CreateCharacterMutation";
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import DateInput from './DateInput';


export default class NewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
  };
  // handleSubmit = (e) => {
    // e.preventDefault();
    // Relay.Store.commitUpdate( //takes an instance of a mutation class as an argument
    //   new CreateCharacterMutation({
    //     firstName: this.refs.newFirstName.value,
    //     lastName: this.refs.newLastName.value,
    //     middleName: this.refs.newMiddleName.value,
    //     dob: this.refs.newDob.value,
    //     dod: this.refs.newDod.value,
    //     house: this.refs.newHouse.value,
    //     occupation: this.refs.newOccupation.value,
    //     magical: this.refs.newMagical.value,
    //     wand: this.refs.newWand.value,
    //     patronus: this.refs.newPatronus.value,
    //     DA: this.refs.newDA.value,
    //     deathEater: this.refs.newDeathEater.value,
    //     specialSkills: this.refs.newSpecialSkills.value,
    //     gender: this.refs.newGender.value,
    //     store: this.props.store
    //   })
    // );
    // this.refs.newFirstName = "";
    // this.refs.newLastName = "";
    // this.refs.newMiddleName = "";
    // this.refs.newDob = "";
    // this.refs.newDod = "";
    // this.refs.newHouse = "";
    // this.refs.newOccupation = "";
    // this.refs.newMagical = "";
    // this.refs.newWand = "";
    // this.refs.newPatronus = "";
    // this.refs.newDA = "";
    // this.refs.newDeathEater = "";
    // this.refs.newSpecialSkills = "";
    // this.refs.newGender = "";
  // };
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
      <form onSubmit={this.handleSubmit} className="form-horizontal">
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