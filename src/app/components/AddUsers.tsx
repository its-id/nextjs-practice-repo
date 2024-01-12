import React from 'react';

const AddUsers = () => {
  return (
    <div className='add-user'>
      <h3> Add User </h3>
      <input
        className='add-user-input'
        type='text'
        placeholder='Add New User'
      />
      <button className='add-user-btn'>Add User</button>
    </div>
  );
};

export default AddUsers;
