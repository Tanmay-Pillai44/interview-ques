import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextComp = (props) => {

    const [user, setUser] = useState('Tanmay');

    return (
        <>
            <UserContext.Provider value={user} >
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextComp;