import React from 'react'
import { signup } from '../actions/session_a'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const NewUserForm = ({ signup }) => {
  const handleInputChange = event => {
      return "foo"
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event.target)
    signup(event.target)
  }

  return (
    <div>
    <form 
    onSubmit={handleSubmit}
    >
      <input 
      placeholder="Username" 
      name="username" 
      type="text" 
      onChange={handleInputChange} 
      />
      <br/>
      <input 
      placeholder="Password" 
      name="password" 
      type="text" 
      onChange={handleInputChange} 
      />
      <br/>
      <input 
      placeholder="Name" 
      name="name" 
      type="text" 
      onChange={handleInputChange} 
      />
      <br/>
      <input 
      type="submit" 
      value="Create My Account"
      />
    </form>
    <NavLink exact activeClassName="active" to="/"  >I'm an existing user...</NavLink>
    </div>
  )
}

export default connect(null,{signup})(NewUserForm)
