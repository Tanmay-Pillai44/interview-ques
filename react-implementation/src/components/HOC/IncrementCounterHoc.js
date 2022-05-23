import React, { useState } from "react"

const IncrementCounterHoc = (Comp) => {

    const AddedCounterFunc = () => {

        const [counter, setCounter] = useState(0);

        const handleIncrement = () => {
            setCounter(counter + 1);
        }

        return (
            <Comp counter={counter} handleIncrement={handleIncrement} />
        )
    }

    return AddedCounterFunc;
}

export default IncrementCounterHoc;