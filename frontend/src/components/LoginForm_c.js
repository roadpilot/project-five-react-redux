import React from 'react'

const LoginForm = () => {
  const handleInputChange = event => {
      return "foo"
  }

  const handleSubmit = event => {
    event.preventDefault()
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

export default LoginForm