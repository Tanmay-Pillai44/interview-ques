const Child = ({ name }) => {
    return (
        <>
            <h2>I am Child Component</h2>
            <h3>This data is from my Parent to child Func: {name}</h3>
        </>
    )
}

export default Child;