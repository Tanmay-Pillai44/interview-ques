import CompCon1 from "./CompCon1";
import CompCon2 from "./CompCon2";

const ParentComp = (props) => {

    const isRender = props.isRender

    // if(isRender) {
    //     return <CompCon2 />;
    // }
    // return <CompCon1 />



    // return (
    //     <>
    //         {
    //             isRender && <CompCon2 />
    //         }
    //     </>
    // )


    // return (
    //     <>
    //         {
    //             isRender ? <CompCon2 /> : <CompCon1 />
    //         }
    //     </>
    // )
}

export default ParentComp;