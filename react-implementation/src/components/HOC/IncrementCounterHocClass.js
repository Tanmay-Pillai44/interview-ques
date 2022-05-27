import React from "react"

const IncrementCounterHocClass = (Comp) => {

    class AddedCounterClass extends React.Component {

        constructor() {
            super()
            this.state = {
                counter: 0
            }
        }

        handleIncrement = () => {
            this.setState({counter: this.state.counter + 1})
        }

        render() {
            return (
                <>
                    <Comp counter={this.state.counter} handleIncrement={this.handleIncrement} />
                </>
            )
        }
    }

    return AddedCounterClass;
}

export default IncrementCounterHocClass;