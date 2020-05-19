import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Form from './components/Form';
// import FriendsList from './components/FriendsList';

import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <PrivateRoute exact path='/protected' component={FriendsList} /> */}
          <PrivateRoute exact path='/protected' component={Form} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
