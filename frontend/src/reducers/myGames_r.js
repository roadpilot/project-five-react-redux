const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GAMES":
      // console.log("SET",action.mygames)
      return action.mygames
    case "CLEAR_MY_GAMES":
      return initialState
    default:
      return state
  }
}

