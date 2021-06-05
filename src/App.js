import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList ] = useState([])
  return (
    <div className="App">
      <AddUser />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
