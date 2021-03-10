const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GAMES":
      // console.log("SET",action.mygames)
      return action.mygames
    case "CLEAR_MY_GAMES":
      return initialState
    case "ADD_GAME_TO_STATE":
      console.log( "ACTION", action)
      // debugger
      return state.concat(action.game)
    default:
      return state
  }
}

