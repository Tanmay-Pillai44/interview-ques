import { useReducer } from 'react';

const initialState = {
    num: 0,
    name: "Tanmay"
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, num: state.num + action.payload}
        case 'DECREMENT':
            return {...state, num: state.num - action.payload}
        case "CHANGE_NAME":
            return {...state, name: "John"}
        default:
            return;
}
}

const UseReducerExample = () => {

    const [myState, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>Counter: {myState.num}</h2>
            <button onClick={() => dispatch({type: "INCREMENT", payload: 2})}>Increase</button>
            <button onClick={() => dispatch({type: "DECREMENT", payload: 2})}>Decrease</button>
            <h2>Name: {myState.name}</h2>
            <button onClick={() => dispatch({type: "CHANGE_NAME"})}>Change Name</button>
        </>
    )

}

export default UseReducerExample;