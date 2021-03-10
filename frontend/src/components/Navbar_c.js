import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout_c'



const Navbar = ({ currentUser, loggedIn }) => {
    if (loggedIn){
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/"  >Home</NavLink>
      <NavLink exact activeClassName="active" to="/games"  >My Games</NavLink>
      <NavLink exact activeClassName="active" to="/bets"  >My Bets</NavLink>
      <NavLink exact activeClassName="active" to="/bets/new" >New Bet</NavLink>
      Logged in as {currentUser}<Logout/>
    </div>
  )
    }
    else {
      return("Please wait...")
    }
}

const mapStateToProps = state => {
  // console.log("SESSION",Object.keys(state.session).length)
    let currentUser = ""
    if (Object.keys(state.session).length>0){
      currentUser = state.session.attributes.name
    }
  return {
    currentUser,
    loggedIn: state.session!==null
  }
}

export default connect(mapStateToProps)(Navbar)
