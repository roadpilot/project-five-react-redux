import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const Navbar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/"  >Home</NavLink>
      <NavLink exact activeClassName="active" to="/games"  >My Games</NavLink>
      <NavLink exact activeClassName="active" to="/bets"  >My Bets</NavLink>
      <NavLink exact activeClassName="active" to="/bets/new" >New Bet</NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p>Logout</> : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.session,
    loggedIn: state.session===null
  }
}

export default connect(mapStateToProps)(Navbar)
