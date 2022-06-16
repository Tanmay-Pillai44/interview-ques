import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = (props) => {

    const isRender = props.isRender

    return (
        <>
        {
            isRender ? <Child1 /> : <Child2 />
        }
        </>
    )
}

export default Parent;