import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./redux/action/action";


const ReduxComp = () => {

    const myState = useSelector((state) => state)

    console.log(myState);

    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter: {myState.num}</h1>
            <button onClick={() => dispatch(incrementCounter(5))}>Increment</button>
            <button onClick={() => dispatch(decrementCounter(5))}>Decrement</button>
        </>
    )
}

export default ReduxComp;