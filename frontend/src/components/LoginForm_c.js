import React, { useState } from 'react'
import { login } from '../actions/session_a'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const LoginForm = ({ login, error }) => {
  const [errorMsg, setErrorMsg] = useState(error)

  async function handleSubmit(event){
    event.preventDefault()
    const errors = await login(event.target)
    if (errors){setErrorMsg(errors)}
  }

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className='w-11/12 max-w-2xl mx-auto mt-8'
        >
          <h1 className='font-bold text-3xl mb-2'>Log In</h1>
          <p className='h-8 text-red-400'>{errorMsg}</p>
          <fieldset>
            <label className='block uppercase mb-2' htmlFor='email'>
              User Name:
            </label>
            <input
              placeholder="" 
              name="username" 
              type="text" 
              className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
              onChange={() => setErrorMsg('')}
              autoComplete="off"
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
              onChange={() => setErrorMsg('')}
              autoComplete="off"
            />
          </fieldset>
          <input
            className=
            {`w-full mt-4 px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`} 
            type='submit'
            value='Log In'
          />
          <NavLink exact to="/signup"  >
          <input
            className=
            {`w-full mt-4 px-5 py-3 rounded-lg transform transition bg-gray-500 hover:bg-gray-400 hover:-translate-y-0.5 focus:ring-gray-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-gray-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`} 
            type='button'
            value="I'm a new user..."
          />
          </NavLink>
        </form>
      </div>      
    </div>
  )
}

export default connect(null,{login})(LoginForm)
