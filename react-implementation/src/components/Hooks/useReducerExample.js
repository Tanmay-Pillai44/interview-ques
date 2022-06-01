import React, { useReducer } from "react";

const initialState = {
    num: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, num: state.num + action.payload}
        case 'decrement':
            return {...state, num: state.num - action.payload}
        default:
            return;
    }
}

const UseReducerExample = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>Reducer Counter: {count.num}</h2>
            <button onClick={() => dispatch({type: 'increment', payload: 5})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 5})}>Decrement</button>
        </>
    )
}

export default UseReducerExample;
