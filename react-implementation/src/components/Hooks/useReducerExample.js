import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return;
    }
}

const UseReducerExample = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>Reducer Counter: {count}</h2>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </>
    )
}

export default UseReducerExample;
