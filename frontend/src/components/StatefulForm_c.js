import React from 'react';
 
class Form extends React.Component {
  render() {
    return (
      <div>
      <form
        onSubmit={this.handleSubmit}
        className='w-11/12 max-w-2xl mx-auto mt-8'
      >
        <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
        <p className='h-8 text-red-400'>{/*this.props.state.errors.status.message*/}</p>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='email'>
            Email:
          </label>
          <input
            type='text'
            name='email'
            id='email'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.email}
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
            value={this.props.formData.password}
          />
        </fieldset>
        <input
          className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
          type='submit'
          value='Sign Up'
        />
        </form>
      </div>
    )
  }
}
 
export default Form;