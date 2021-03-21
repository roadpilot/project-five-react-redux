import React from 'react'
import { connect } from 'react-redux'
import { destroySession } from "../actions/session_a.js"
import { withRouter } from 'react-router-dom'


const Logout = ({ destroySession, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        destroySession()
        history.push('/')
      }
    }>
      <input 
      className={`px-5 py-3 rounded-lg transform transition bg-gray-500 hover:bg-gray-400 hover:-translate-y-0.5 focus:ring-gray-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-gray-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`}
      type="submit" value="Log Out"/>
    </form>
  )
}

export default withRouter(connect(null, { destroySession } )(Logout)) 