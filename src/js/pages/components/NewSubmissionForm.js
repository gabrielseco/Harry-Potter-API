import React from 'react';

export default class NewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.formType);
    let inputs = this.props.formType.map(input => {
        switch (input.type) {
          case 'text':
            let foo = (
              <div className="col-sm-10">
                <label for={input.name} class='col-sm-2 control-label'>{input.label}</label>
                <input type='text'
                       maxlength={input.options.maxlength}
                       id={input.name}
                       placeholder={input.options.placeholder}
                />
              </div>
            )
            break;
          case 'date':
            let foo = (
              <div className="col-sm-10">
                <label for={input.name} class='col-sm-2 control-label'>{input.label}</label>
                <input type='date' id={input.name} />
              </div>
            )
            break;
          case 'radio':
            let foo = (
              let options = input.options.map(option => {
                return(
                  <input type='radio'
                         id={option}
                         name={input.name}
                         value={option}
                         placeholder={input.options.placeholder}
                  />
                )
              })
              <div className="col-sm-10">
                <label for={input.name} class='col-sm-2 control-label'>{input.label}</label>
              </div>
            )
            break;

        }
        return (
          <div class='form-group'>
            {foo}
          </div>
        )
      }
    })

    return (
      <form class="form-horizontal">
        <div class="form-group">
          <label for="firstName" class="col-sm-2 control-label">First Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="firstName" placeholder="Email" />
          </div>
        </div>
        <div class="form-group">
          <label for="lastName" class="col-sm-2 control-label">Last Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="lastName" placeholder="Password" />
          </div>
        </div>


      {/*submit button*/}
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}