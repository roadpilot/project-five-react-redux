import React from 'react'
import { login } from '../actions/session_a'
import { connect } from 'react-redux'


const LoginForm = ({ login }) => {
  const handleInputChange = event => {
      return "foo"
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event.target)
    login(event.target)
  }

  return (
    <form 
    onSubmit={handleSubmit}
    >
      <input 
      placeholder="username" 
      name="username" 
      type="text" 
      onChange={handleInputChange} 
      />
      <input 
      placeholder="password" 
      name="password" 
      type="text" 
      onChange={handleInputChange} 
      />
      <input 
      type="submit" 
      value="Log In"
      />
    </form>
  )
}

export default connect(null,{login})(LoginForm)