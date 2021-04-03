const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GAMES":
      return action.mygames
    case "CLEAR_MY_GAMES":
      return initialState
    case "ADD_GAME_TO_MYGAMES":
      return state.concat(action.game)
    case "DROP_GAME_FROM_MYGAMES":
      return state.filter(game => game.id === action.game_id ? false : true)
    case "UPDATE_GAME":
      return state.map(game => game.id === action.game.id ? action.game : game)
    default:
      return state
  }
}

