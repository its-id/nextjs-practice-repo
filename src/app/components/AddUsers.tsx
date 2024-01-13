'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';
import Link from 'next/link';

const AddUsers = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const userDispatch = () => {
    //we send the data to the slice using dispatch hook
    dispatch(addUser(name));
  };

  return (
    <div className='add-user'>
      <h3> Add User </h3>
      <input
        className='add-user-input'
        type='text'
        onChange={(e) => setName(e.target.value)}
        placeholder='Add New User'
      />
      <button onClick={userDispatch} className='add-user-btn'>
        Add User
      </button>
      <div className='links-container'>
        <Link href='/remove-user'>Remove User</Link>
        <Link href='/todos'>Todos</Link>
        <Link href='/api-users'>API feteched Users</Link>
      </div>
    </div>
  );
};

export default AddUsers;
