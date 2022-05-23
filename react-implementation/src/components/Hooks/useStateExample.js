import React, { useState } from 'react';

const UseStateExample = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>Counter Func: {counter}</h1>
            <button onClick={increment}>Click</button>
        </>
    )
}

export default UseStateExample;