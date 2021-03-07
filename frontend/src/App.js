import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import LoginForm  from './components/LoginForm_c'
import { getCurrentUser } from './actions/session_a'

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
    return ("loaded")
    }
  }
}

const mapStateToProps = state => {
  console.log(!state.session===null)
  return ({
    loggedIn: state.session===null,
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
