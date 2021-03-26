import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout_c'



const Navbar = ({ currentUser, loggedIn }) => {
    if (loggedIn){
  return (
    <div className="grid grid-cols-7 gap-4 p-5 fixed bg-gray-300 bg-opacity-100 z-50">
      <NavLink exact 
      className={`px-5 py-3 rounded-lg transform transition bg-gray-500 hover:bg-gray-400 hover:-translate-y-0.5 focus:ring-gray-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-gray-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`} 
      to="/"  >ALL</NavLink>
      <NavLink exact 
      className={`px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`} 
      to="/games/mlb"  >MLB</NavLink>
      <NavLink exact 
      className={`px-5 py-3 rounded-lg transform transition bg-red-500 hover:bg-red-400 hover:-translate-y-0.5 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-red-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`} 
      to="/games/ncaab"  >NCAAB</NavLink>
      <NavLink exact 
      className={`px-5 py-3 rounded-lg transform transition bg-green-500 hover:bg-green-400 hover:-translate-y-0.5 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-green-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`}
      to="/games/nba" >NBA</NavLink>
      <NavLink exact 
      className={`px-5 py-3 rounded-lg transform transition bg-yellow-500 hover:bg-yellow-400 hover:-translate-y-0.5 focus:ring-yellow-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-yellow-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`}
      to="/games/nhl" >NHL</NavLink>
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
