import React from 'react';
import Form from './StatefulForm_c'
import DisplayData from './StatefulFormDisplayData_c'
 
class ParentComponent extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
  }
  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }
 
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
  
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}
 
export default ParentComponent;