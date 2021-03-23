import React from 'react';
import { NavLink } from 'react-router-dom'
 
class Form extends React.Component {

  render() {
    // const handleSubmit = (event) => {
    //   event.preventDefault()
    // }

    return (
      <div>
      <form
        onSubmit={this.props.handleSubmit}
        className='w-11/12 max-w-2xl mx-auto mt-8'
      >
        <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
        <p className='h-8 text-red-400'>{this.props.errors}</p>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='email'>
            User Name:
          </label>
          <input
            placeholder="" 
            name="username" 
            type="text" 
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.username}
            autocomplete="off"
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
            onChange={event => this.props.handleChange(event)}
            // value={formData.password}
            autocomplete="off"
          />
        </fieldset>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='email'>
            Display Name:
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.name}
            autocomplete="off"
          />
        </fieldset>
        <input
          className=
          {`w-full mt-4 px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`} 
          type='submit'
          value='Sign Up'
        />
        <NavLink exact to="/"  >
        <input
          className=
          {`w-full mt-4 px-5 py-3 rounded-lg transform transition bg-gray-500 hover:bg-gray-400 hover:-translate-y-0.5 focus:ring-gray-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-gray-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`} 
          type='button'
          value="I'm an existing user..."
        />
        </NavLink>
        </form>
      </div>
    )
  }
}
 
export default Form;