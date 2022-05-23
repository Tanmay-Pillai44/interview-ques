import React, { memo } from 'react';

const PureComponentFunc = (props) => {

    console.log("Pure Functional Component")

    return (
        <>
            <h1>Pure Functional Component: {props.counter1}</h1>
        </>
    )
}

export default memo(PureComponentFunc);