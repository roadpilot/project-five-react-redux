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
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default withRouter(connect(null, { destroySession } )(Logout)) 