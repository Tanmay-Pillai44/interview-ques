import React from "react";

class ReactLifecycle extends React.Component {

    constructor(props) {
        super(props)
        console.log("Constructor function")
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("ComponentDidMount Function")
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate Function")
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount Function")
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("Render fucntion")
        return (
            <>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

export default ReactLifecycle;