export const setMyGames = mygames => {
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

export const updateGame = game => {
  return {
    type: "UPDATE_GAME",
    game
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
          dispatch(setMyGames(response.data))
        }
      })
      .catch(console.log)
  }
}



export const dropGame = (game_id) => {
  return dispatch => {
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
          dispatch(deleteGame(game_id))
        }
      })
      .catch(console.log)
  }
}

export const deleteGame = game_id => {
  return {
    type: "DROP_GAME_FROM_MYGAMES",
    game_id
  }
}

export const addBet = (betData) => {
  betData = {bet: {...betData}}
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
          dispatch(updateGame(resp.data))
        }
      })
      .catch(console.log)
  }
}

export const deleteBet = (betData) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/games/${betData.game_id}/bets/${betData.id}`, {
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
          dispatch(updateGame(resp.data))
        }
      })
      .catch(console.log)
  }
}
