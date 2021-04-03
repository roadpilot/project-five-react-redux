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
    if (this.props.notLoggedIn) {
      // Render Login state ...
      return (
        <Switch>
            <Route exact path='/signup' component={ParentComponent}/>
            <Route exact path='/' component={LoginForm}/>
            <Route path='*'  render={() => {
              return <LoginForm error='You must be logged in to continue...'/>
            }
          }
            />
        </Switch>
      )
    } else {
      // Render Logged in UI ...
      return (
        <div>
          <Navbar/>
          <Switch>
          <Route exact path='/games/:league'  render={props => {
              return <MainContainer leagueFilter={props.match.params.league}/>
            }
          }/>        
          <Route exact path='/games' render={() => {
              return <MainContainer leagueFilter=''/>
            }
          }/>        
          <Route exact path='/' render={() => {
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
    notLoggedIn: (state.session===null || state.session.length===0),
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
