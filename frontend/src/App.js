import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import LoginForm  from './components/LoginForm_c'
import { getCurrentUser } from './actions/session_a'
import MainContainer from './components/MainContainer_c';
import Navbar from './components/Navbar_c';
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    if (this.props.loggedIn) {
      // Render loading state ...
    return (<LoginForm/>)
    } else {
      // Render real UI ...
    return (
      <div>
        <Navbar/>
        <MainContainer/>        
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: state.session===null,
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
