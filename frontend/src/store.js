import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user.js'
import session from './reducers/session_r.js'
import allGames from './reducers/allGames_r.js'
import myGames from './reducers/myGames_r.js'

// const user = () => []  //just for testing
const reducer = combineReducers({
  user,
  session,
  allGames,
  myGames
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
