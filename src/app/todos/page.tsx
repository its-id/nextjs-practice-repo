'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, removeTodo } from '../redux/todoSlice';

const Todos = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const todosData = useSelector((data: any) => data?.todosData?.todos);

  const todosDispatch = () => {
    dispatch(addTodos(name));
  };

  const deleteTodo = (userid: string) => {
    dispatch(removeTodo(userid));
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
      </div>
      <div className='display-users'>
        <h3> Users List </h3>
        {todosData.length > 0 && todosData.map((user: any) => (
          <div key={user.id} className='user-item'>
            <span>{user.name}</span>
            <button onClick={() => deleteTodo(user.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
