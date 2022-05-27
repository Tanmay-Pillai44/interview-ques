import React, { memo } from 'react';

const CallbackHookExample = ({ counter2, incrementCounter2 }) => {

    console.log("UseCallback Component Render")
    return (
        <>
            <h1>Counter 2: {counter2}</h1>
            <button onClick={incrementCounter2}>Click counter2</button>
        </>
    )
}

export default memo(CallbackHookExample);