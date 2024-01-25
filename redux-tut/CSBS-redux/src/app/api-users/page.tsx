'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIData } from '../redux/slice';
import { AppDispatch } from '../redux/store';

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((data: any) => data.usersData.userAPIData);

  const fetchUserData = () => {
    dispatch(fetchAPIData());
  }

  useEffect(() => {
    dispatch(fetchAPIData());
  }, []);

  return (
    <div className='display-users' style={{height: '95vh'}}>
      <h3> Fetched API Users List </h3>
      <button onClick={fetchUserData}>Fetch Users</button>
      {
        userData.map((user: any) => (
          <div key={user.id}>
            <p> {user.name} </p>
          </div>
        ))
      }
    </div>
  );
}

export default Users