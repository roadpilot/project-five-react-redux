//@@INIT returns default state of all reducers
// const initialState = [{
//     "username":"mda",
//     "name":"Martin"
// }]

const initialState = []

export default (state=initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}