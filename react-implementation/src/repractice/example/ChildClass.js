import React from 'react';

class ChildClass extends React.Component {

    render() {
        return (
            <>
                <h2>I am Child Class Component</h2>
                <h3>This data is from my Parent: {this.props.name}</h3>
            </>
        )
    }
}

export default ChildClass;