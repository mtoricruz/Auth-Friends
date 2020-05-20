import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class FriendsList extends React.Component {
    state = {
        friends: [
            {
                id: Date.now(),
                name: '',
                age: 0,
                email: ''
            }
        ],
    };

    componentDidMount() {
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
              this.setState({ friends: res.data })
          })
          .catch(err => console.log(err))
    }

    render() {
        return (
            <main className='friends-list'>
                {this.state.friends.map((friend) => (
                    <div key={friend.id}>
                        <h4>{friend.name}</h4>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
            </main>
        )
    }
}