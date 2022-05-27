import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Child1 = () => {

    const user = useContext(UserContext);

    return (
        <>
            <h2>I am Child 1: {user}</h2>
        </>
    )
}

export default Child1;