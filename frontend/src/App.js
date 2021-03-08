import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import LoginForm  from './components/LoginForm_c'
import NewUserForm  from './components/NewUserForm_c'
import { getCurrentUser } from './actions/session_a'
import MainContainer from './components/MainContainer_c';
import Navbar from './components/Navbar_c';
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    if (this.props.loggedIn) {
      // Render loading state ...
    return (
      <Switch>
          <Route exact path='/signup' component={NewUserForm}/>
          <Route exact path='/' component={LoginForm}/>
      </Switch>
    )
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
  console.log(state.session)
  return ({
    loggedIn: (state.session===null || state.session.length===0),
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
