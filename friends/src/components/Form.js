import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
        axiosWithAuth()
            .post('/api/friends', friend)
            .then(res => {
                setNewFriends([...newFriends, res.data])
                console.log('postFriend---->', res.data)
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
              <label>Name:
                <input
                  type='text'
                  name='name'
                  onChange={changeHandler}
                  value={props.name}
                />
              </label>
              <label>Age:  
                <input
                  type='number'
                  name='age'
                  onChange={changeHandler}
                  value={props.age}
                />
              </label>
              <label>Email:
                <input
                  type='text'
                  name='email'
                  onChange={changeHandler}
                  value={props.email}
                />
              </label>
                <button>Add New Friend</button>
            </form>
        </div>
    )
}

export default Form