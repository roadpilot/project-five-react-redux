import React from 'react'
import { login } from '../actions/session_a'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


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
    <div>
    <form 
    onSubmit={handleSubmit}
    >
      <input 
      placeholder="username" 
      name="username" 
      type="text" 
      onChange={handleInputChange} 
      />
      <br/>
      <input 
      placeholder="password" 
      name="password" 
      type="text" 
      onChange={handleInputChange} 
      />
      <br/>
      <input 
      type="submit" 
      value="Log In"
      />
    </form>
    <NavLink exact activeClassName="active" to="/signup"  >I'm a new user...</NavLink>
    </div>
  )
}

export default connect(null,{login})(LoginForm)
