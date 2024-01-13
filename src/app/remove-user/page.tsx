'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const RemoveUser = () => {
  const userData = useSelector((data: any) => data.users); //'users' is the initial state stored in the slice file
  const dispatch = useDispatch();

  const deleteUser = (userid: string) => {
    console.log(userid);
    dispatch(removeUser(userid));
  };

  return (
    <div className='display-users'>
      <h3> Remove User Page </h3>
      {userData.map((user: any) => (
        <div key={user.id} className='user-item'>
          <span>{user.name}</span>
          <button onClick={() => deleteUser(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default RemoveUser;
