import React, { memo } from 'react';

const UseCallbackExample = ({ counter2, incrementCounter2 }) => {

    console.log("UseCallback Component Render")
    return (
        <>
            <h1>Counter 2 Callback: {counter2}</h1>
            <button onClick={incrementCounter2}>Click counter2</button>
        </>
    )
}

export default memo(UseCallbackExample);