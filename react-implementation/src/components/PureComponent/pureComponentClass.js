import React from "react";

class PureComponentClass extends React.PureComponent {

    render() {
        console.log("Pure Class Component")
        return (
            <>
                <h1>Pure Class Component: {this.props.counter1}</h1>
            </>
        )
    }
}

export default PureComponentClass;