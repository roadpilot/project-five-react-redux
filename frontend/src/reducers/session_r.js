//@@INIT returns default state of all reducers
const initialState = []

export default (state=initialState, action) => {
    console.log(action.type)
    switch (action.type){
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
        default:
            return state
    }
}