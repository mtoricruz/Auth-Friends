import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [newFriends, setNewFriends] = useState({
        id: Date.now(),
        name: '',
        age: 0,
        email: '',
    });

    const changeHandler = e => {
        setNewFriends({ ...newFriends, [e.target.name]: e.target.value});
    };

    const postFriend = friend => {
        axios.post('http://localhost:5000/api/friends', friend)
            .then(res => {
                setNewFriends([...newFriends, res.data])
                console.log('postFriend---->', res)
            })
            .catch(err => console.log(err))
    }

    const submitForm = e => {
        e.preventDefault();
        postFriend(newFriends)
    }

    return (
        <div className='Form'>
            <form onSubmit={submitForm}>
                <input
                  type='text'
                  name='name'
                  onChange={changeHandler}
                  value={props.name}
                />
                <input
                  type='number'
                  name='age'
                  onChange={changeHandler}
                  value={props.age}
                />
                <input
                  type='text'
                  name='email'
                  onChange={changeHandler}
                  value={props.email}
                />
                <button>Add New Friend</button>
            </form>
        </div>
    )
}

export default Form