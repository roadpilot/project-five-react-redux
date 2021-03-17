import React from 'react';
import Form from './StatefulForm_c'
import DisplayData from './StatefulFormDisplayData_c'
 
class ParentComponent extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {status: {message: ""}}
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}
 
export default ParentComponent;