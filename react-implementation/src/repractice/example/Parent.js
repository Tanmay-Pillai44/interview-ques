import { useState } from 'react';
import Child from './Child';
import ChildClass from './ChildClass';

const Parent = () => {

    const [name, setName] = useState("Tanmay")

    return (
        <>
            <h1>I am Parent Component</h1>
            <Child name={name} />
            <ChildClass name={name} />
        </>
    )
}

export default Parent;