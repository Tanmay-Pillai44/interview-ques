import React, { useState, useRef } from "react";

const ControlledAndUncontrolled = () => {

    const [name, setName] = useState('');

    const inputRef = useRef(null);

    function handleControlledSubmit() {
        alert(`Name: ${name}`);
    }


    function handleUncontrolledSubmit() {
        alert(`Name: ${inputRef.current.value}`);
    }

    return (
        <>
            <h3>Controlled Component</h3>
            <form onSubmit={handleControlledSubmit}>
                <label>Name:</label>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <h3>Uncontrolled Component</h3>
            <form onSubmit={handleUncontrolledSubmit}>
                <label>Name :</label>
                <input type="text" name="name" ref={inputRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ControlledAndUncontrolled;