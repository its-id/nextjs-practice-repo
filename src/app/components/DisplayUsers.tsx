'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const DisplayUsers = () => {
  /*we get the users from store using useSelector hook
  we return our required state from the store inside the callback fn.*/
  const userData = useSelector((data: any) => data.usersData.users); //'usersData' is the renamed obj inside the store containing 'users' initial state stored in the slice file

  const dispatch = useDispatch();

  const deleteUser = (userid: string) => {
    dispatch(removeUser(userid));
  };

  return (
    <div className='display-users'>
      <h3> Users List </h3>
      {userData.length > 0 && userData.map((user: any) => (
        <div key={user.id} className='user-item'>
          <span>{user.name}</span>
          <button onClick={() => deleteUser(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
