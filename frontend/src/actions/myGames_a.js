export const setMyGames = mygames => {
  // console.log("SET")
  // let a = ["a","b"]
  return {
    type: "SET_MY_GAMES",
    mygames
  }
}

export const clearMyGames = () => {
  return {
    type: "CLEAR_MY_GAMES"
  }
}

export const getMyGames = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/games", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          // console.log("MY GAMES",response.data)
          dispatch(setMyGames(response.data))
        }
      })
      .catch(console.log)
  }
}



export const dropGame = (game_id) => {
  console.log("dropGame",game_id)
  return dispatch => {
  // debugger
    return fetch(`http://localhost:3001/api/v1/games/${game_id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteGameFromState(game_id))
          // history.push(`/games`)
          // go somewhere else --> game show?
          // add the new game to the store
        }
      })
      .catch(console.log)
  }
}

export const deleteGameFromState = game_id => {
  console.log("TEST")
  return {
    type: "DELETE_GAME",
    game_id
  }
}

export const addBet = (betData) => {
  console.log("ACTION",betData)
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/games/${betData.game_id}/bets`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(betData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          // dispatch(addGameToState(resp.data))
        }
      })
      .catch(console.log)
  }
}
