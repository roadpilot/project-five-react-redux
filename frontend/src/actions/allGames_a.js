export const setAllGames = games => {
  games = games.map(game => ({
  ...game, 
  gameTime: new Date(game.schedule.date).toLocaleString().split(", ")[1].replace(":00","")
  })
  )
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
    type: "ADD_GAME_TO_MYGAMES",
    game
  }
}

export const getAllGames = () => {
  return dispatch => {
  fetch("http://104.255.169.179/~achterma/jfjf75h6bgjvhfhge/api.php", {
  // fetch("http://localhost/default.aspx", {
    "method": "GET",
    "headers": {
      "Access-Control-Allow-Origin":"http://localhost:3000",
    }
  })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        const JSONTime = new Date(response.time).toLocaleString()//.slice(0,16)
        console.log("LAST UPDATE",JSONTime)
        dispatch(setAllGames(response.results))
      }
    })
    .catch(console.log)
  }
}

export const addGame = (gameId) => {
  return dispatch => {
    const gameData = {
      gameid: gameId
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
        }
      })
      .catch(console.log)
  }
}

