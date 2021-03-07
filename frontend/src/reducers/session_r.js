//@@INIT returns default state of all reducers
const initialState = []

export default (state=initialState, action) => {
    switch (action.type){
        case "SET_CURRENT_USER":
            console.log("hit reducer")
            return action.user
        default:
            return state
    }
}