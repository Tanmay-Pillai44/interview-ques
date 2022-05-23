import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            console.log('counter updated: ' + counter)
            setCounter((counter) => counter + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [counter])

    return (
        <>
            <h1>Counter useEffect: {counter}</h1>
        </>
    )
}

export default UseEffectExample;