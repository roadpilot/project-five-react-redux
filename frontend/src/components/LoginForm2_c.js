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
<div>
      <form
        onSubmit={handleSubmit}
        className='w-11/12 max-w-2xl mx-auto mt-8'
      >
        <h1 className='font-bold text-3xl mb-2'>Log In</h1>
        <p className='h-8 text-red-400'>{/*this.props.state.errors.status.message*/}</p>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='email'>
            User Name:
          </label>
          <input
            placeholder="username" 
            name="username" 
            type="text" 
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            // onChange={event => handleChange(event)}
            // value={this.props.formData.email}
          />
        </fieldset>
                <fieldset>
          <label className='block uppercase mb-2' htmlFor='password'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            // onChange={event => handleChange(event)}
            // value={formData.password}
          />
        </fieldset>
        <input
          className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
          type='submit'
          value='Log In'
        />
        </form>
    <NavLink exact activeClassName="w-full text-center" to="/signup"  >I'm a new user...</NavLink>
</div>      
    </div>
  )
}

export default connect(null,{login})(LoginForm)
