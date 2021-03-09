export const setAllGames = games => {
  return {
    type: "SET_ALL_GAMES",
    games
  }
}

export const clearAllGames = () => {
  return {
    type: "CLEAR_ALL_GAMES"
  }
}

export const addGameToState = game => {
  return {
    type: "ADD_GAME_TO_STATE",
    game
  }
}

export const getAllGames = () => {
  return dispatch => {
  fetch("http://104.255.169.179/~achterma/jfjf75h6bgjvhfhge/api.php", {
    "method": "GET",
    "headers": {
      // "x-rapidapi-key": "97c9af71cbmshedc491e264e8007p1a8b16jsn21e4bf6176ca",
      // "x-rapidapi-host": "sportspage-feeds.p.rapidapi.com"
      "Access-Control-Allow-Origin":"http://localhost:3000",
    }
  })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        console.log(response.error)
        alert(response.error)
      } else {
        // console.log("FETCH",response)
        // console.log("RESULTS",response.results)
        // debugger
        const JSONTime = new Date(response.time).toLocaleString()//.slice(0,16)
        console.log("LAST UPDATE",JSONTime)
        dispatch(setAllGames(response.results))
      }
    })
    .catch(console.log)
  }
}

export const addGame = (gameId) => {
  console.log(gameId)
  return dispatch => {
    const gameData = {
      gameid: gameId,
      user_id: "1"
    }
    return fetch("http://localhost:3001/api/v1/games", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addGameToState(resp.data))
          // dispatch(resetTripForm())
          // history.push(`/trips/${resp.data.id}`)
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)
  }
}

