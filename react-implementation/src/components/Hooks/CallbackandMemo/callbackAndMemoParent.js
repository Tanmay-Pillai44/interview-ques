import React, { useState, useCallback, useMemo } from 'react';
import UseCallbackExample from './useCallbackExample';

const CallbackAndMemoParent = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const calculation =useMemo(() => expensiveCalc(counter1), [counter1]);

    const incrementCounter1 = () => {
        setCounter1((c) => c + 1)
    }

    const incrementCounter2 = useCallback(() => {
        setCounter2((c) => c + 1)
    }, [])

    return (
        <>
            <h1>Counter 1 Callback: {counter1}</h1>
            <button onClick={incrementCounter1}>Click counter1</button>
            <UseCallbackExample counter2={counter2} incrementCounter2={incrementCounter2} />

            <h2>Expensive Calculation: {calculation}</h2>
        </>
    )
}

const expensiveCalc = (num) => {
    console.log("Calculating...");
    for(let i = 0; i < 100000000; i++) {
        num += 1;
    }
    return num;
}


export default CallbackAndMemoParent;