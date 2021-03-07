import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user.js'
import session from './reducers/session.js'

// const user = () => []  //just for testing
const reducer = combineReducers({
  user,
  session
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
