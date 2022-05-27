import React, { useState, useEffect } from 'react';

const TempExample = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        return () => console.log("only update")
    }, [counter])

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter((c) => c+1)}>Update</button>
        </>
    )
}

export default TempExample;