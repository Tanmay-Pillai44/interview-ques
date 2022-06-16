import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("I executed when mounted and counter updated")

        return () => {
            console.log("component is unmounted")
        }
    }, [counter])

    return (
        <>
            <h1>Counter useEffect: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Click</button>
        </>
    )
}

export default UseEffectExample;