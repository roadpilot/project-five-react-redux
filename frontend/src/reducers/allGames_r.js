const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_GAMES":
      return action.games
    case "ADD_MY_GAME":
      return state.concat(action.game)
    case "UPDATE_GAME":
      return state.map(game => game.id === action.game.id ? action.game : game)
    case "CLEAR_ALL_GAMES":
      return initialState
    default:
      return state
  }
}
