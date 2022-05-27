import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { incrementCounter, decrementCounter } from './actions/couterAction';

const MyCounterComp  = () => {

    const myState = useSelector((state) => state.handleMyCounter )

    const dispatch = useDispatch();

    console.log(myState);
    return (
        <>
            <h1>COunter: {myState.num} </h1>
            <h1>NAME : {myState.name}</h1>
            <button onClick={() => dispatch(incrementCounter(5))}>Increase</button>
            <button onClick={() => dispatch(decrementCounter())}>Decrease</button>
            <button onClick={() => dispatch({type:"CHANGE_NAME", payload:"DOE"})}>Change Name</button>
        </>
    )
}

export default MyCounterComp;