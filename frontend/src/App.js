import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import LoginForm  from './components/LoginForm_c'
import ParentComponent from './components/StatefulFormParent_c'
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
            <Route exact path='/signup' component={ParentComponent}/>
            <Route exact path='/' component={LoginForm}/>
            <Route exact path='/form' component={ParentComponent}/>
        </Switch>
      )
    } else {
      // Render real UI ...
      return (
        <div>
          <Navbar/>
          <Switch>
          <Route exact path='/games/:league'  render={props => {
              return <MainContainer leagueFilter={props.match.params.league}/>
            }
          }/>        
          <Route exact path='/'  render={() => {
              return <MainContainer leagueFilter=''/>
            }
          }/>        
          </Switch>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: (state.session===null || state.session.length===0),
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
