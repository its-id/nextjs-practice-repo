import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUsers = () => {
  /*we get the users from store using useSelector hook
  we return our required state from the store inside the callback fn.*/
  const userData = useSelector((data: any) => data.users); //'users' is the initial state stored in the slice file

  return (
    <div className='display-users'>
      <h3> Users List </h3>
      {userData.map((user: any) => (
        <div key={user.id} className='user-item'>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
