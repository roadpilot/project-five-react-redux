const initialState = []

export default (state = initialState, action) => {
  // console.log("PRE SWITCH")
  switch (action.type) {
    case "SET_ALL_GAMES":
      // console.log("SET",action.games)
      return action.games
    case "ADD_MY_GAME":
      // console.log("HIT REDUCER",action.game)
      return state.concat(action.game)
    case "UPDATE_GAME":
      return state.map(game => game.id === action.game.id ? action.game : game)
    // case "DROP_GAME_FROM_MYGAMES":
    //   //console.log( "action.gameId is ", action.gameId)
    //   return state.filter(game => game.id === action.gameId ? false : true)
    case "CLEAR_ALL_GAMES":
      return initialState
    default:
      return state
  }
}
