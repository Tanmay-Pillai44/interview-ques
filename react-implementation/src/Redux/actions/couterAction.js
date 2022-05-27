export const incrementCounter = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decrementCounter = () => {
    return {
        type: "DECREMENT"
    }
}