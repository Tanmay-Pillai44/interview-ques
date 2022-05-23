import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "./actions/counterAction";

const ReduxComponent = () => {

    const myState = useSelector((state) => state.handleMyCounter);

    const dispatch = useDispatch();

    return (
        <>
            <h2>Counter : {myState}</h2> <br/>
            <button onClick={() => dispatch(decrementCounter())}> Decrement </button>
            <button onClick={() => dispatch(incrementCounter())}> Increment </button>
        </>
    )
}

export default ReduxComponent;