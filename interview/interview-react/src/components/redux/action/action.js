export const incrementCounter = (a) => {
    return {
        type: "INCREMENT",
        payload: a
    }
}

export const decrementCounter = (a) => {
    return {
        type: "DECREMENT",
        payload: a
    }
}