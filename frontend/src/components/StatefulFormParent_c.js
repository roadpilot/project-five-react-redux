import React from 'react';
import Form from './StatefulForm_c'
import { connect } from 'react-redux'
import { signup } from '../actions/session_a'
 
class ParentComponent extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    errors: "",
  }
  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signup(this.state)
    .then(response => {
      if (typeof response!=="undefined"){
        this.setState({
          ...this.state, "errors": response
        })
      }
      else {
        this.props.history.push('/')
      }
    })
  }
 
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      </div>
    )
  }
}
 
export default connect(null,{signup})(ParentComponent)