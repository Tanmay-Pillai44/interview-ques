const intialState = {
    num: 0
}

const handleMyCounter = (state = intialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, num: state.num + action.payload}
        case "DECREMENT":
            return {...state, num: state.num - action.payload}
        default:
            return state;
    }
}

export default handleMyCounter;