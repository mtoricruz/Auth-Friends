import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class FriendsList extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount() {
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
              console.log(res)
          })
          .catch(err => console.log(err))
    }

    render() {
        return (
            <main className='friends-list'>
                {/* {this.state.friends.map((friend) => (
                    <div>
                        
                    </div>
                ))} */}
            </main>
        )
    }
}