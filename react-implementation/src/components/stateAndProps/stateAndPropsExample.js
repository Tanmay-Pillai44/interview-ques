import React, { useState } from 'react';

const StateAndPropsExample = (props) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <h2>{props.data}</h2>
        </>
    )
}

export default StateAndPropsExample;