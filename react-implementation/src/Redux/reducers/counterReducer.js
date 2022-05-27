const intialState = {
    num: 10,
    name: "John"
}

const handleMyCounter = (state = intialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, num: state.num + action.payload}
        case "DECREMENT":
            return {...state, num: state.num - 1}
        case "CHANGE_NAME":
            return {...state, name:action.payload}
        default:
            return state;
    }
}

export default handleMyCounter;