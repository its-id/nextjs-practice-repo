'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {  } from '../redux/slice';
import Link from 'next/link';

const Todos = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  /*we get the users from store using useSelector hook
  we return our required state from the store inside the callback fn.*/
  const userData = useSelector((data: any) => data.usersData.users); //'usersData' is the renamed obj inside the store containing 'users' initial state stored in the slice file

  const todosDispatch = () => {
    //we send the data to the slice using dispatch hook
  };

  const deleteUser = (userid: string) => {
    console.log(userid);
  };

  return (
    <>
      <div className='add-user'>
        <h3> Add Todo </h3>
        <input
          className='add-user-input'
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='Add New User'
        />
        <button onClick={todosDispatch} className='add-user-btn'>
          Add Todo
        </button>
        <Link href='/remove-user'>Remove Todo</Link>
      </div>
      <div className='display-users'>
        <h3> Users List </h3>
        {userData.map((user: any) => (
          <div key={user.id} className='user-item'>
            <span>{user.name}</span>
            <button onClick={() => deleteUser(user.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
