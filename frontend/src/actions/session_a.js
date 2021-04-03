import { getAllGames, clearAllGames } from "./allGames_a.js"
import { getMyGames, clearMyGames } from "./myGames_a.js"

// synch creators
export const setCurrentUser = (user) => {
  return dispatch => {
    if (user){
      dispatch(getAllGames())
      dispatch(getMyGames())
    }
    dispatch ({
      type: "SET_CURRENT_USER",
      user
    })
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynch creators
export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
        }
      })
      .catch(console.log)
  }
}

export const signup = (credentials) => {
  return dispatch => {
    const userInfo = {
      user: {
        username: credentials.username,
        password: credentials.password,
        name: credentials.name,
      }
    }
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          return response.error
        } else {
          dispatch(setCurrentUser(response.data))
        }
      })
      .catch(console.log)
  }
}

export const login = (credentials) => {
  credentials = {
        username: credentials.username.value,
        password: credentials.password.value
  }
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          return response.error
        } else {
          dispatch(setCurrentUser(response.data))
        }
      })
      .catch(console.log)
  }
}

export const destroySession = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearAllGames())
    dispatch(clearMyGames())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

