import React, { useState, useCallback } from 'react';
import CallbackHookExample from './callbackHookExample';

const CallBackParent = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const incrementCounter1 = () => {
        setCounter1((c) => c + 1)
    }

    const incrementCounter2 = useCallback(() => {
        setCounter1((c) => c + 1)
    }, [])

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <button onClick={incrementCounter1}>Click counter1</button>
            <CallbackHookExample counter2={counter2} incrementCounter2={incrementCounter2} />
        </>
    )
}

export default CallBackParent;