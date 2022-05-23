import React, { useState } from 'react';

const FormExample = () => {

    const [users, setUsers] = useState([]);

    const [details, setDetails] = useState({
        name: '',
        email: '',
        age: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, details])
        setDetails({
            name: '',
            email: '',
            age: ''
        })
    }

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name='name'
                    id='name'
                    value={details.name}
                    onChange={handleChange}
                /> <br/> <br/>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name='email'
                    id='email'
                    value={details.email}
                    onChange={handleChange}
                /> <br/> <br/>
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name='age'
                    id='age'
                    value={details.age}
                    onChange={handleChange}
                /> <br/> <br/>
                <button type='submit'>Submit</button>
            </form>
            <div>
                {
                    users.map((user, index) => (
                        <div key={index}>{user.name}------{user.email}------{user.age}</div>
                    ))
                }
            </div>
        </>
    )
}

export default FormExample;