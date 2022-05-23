import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Child3 = () => {

    const user = useContext(UserContext);

    return (
        <>
            <h2>I am Child 3: {user}</h2>
        </>
    )
}

export default Child3;