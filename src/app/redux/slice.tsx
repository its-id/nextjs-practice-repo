/*
slice is basically the highlight of redux-toolkit
it combines the work of reducers and action in redux architecture
Note: both action and reducers should be of the same feature
      Eg: if you are making slice for handling auth, reducers and action should be of auth 
      (will not work: action of product and reducer of auth)
*/

import { createSlice, nanoid } from '@reduxjs/toolkit'; //nanoid: to generate unique id

//when the app loads, this is the state which gets created
const initialState = {
  users: [],
};

const Slice:any = createSlice({
  name: 'users-slice',
  initialState,
  reducers: {
    //this is one of the reducer
    addUser: (state: any, action: any) => { 
      //creating the data to pushed into redux's store
      const data = {
        id: nanoid(),
        name: action.payload, //action contains the type and payload. 'type' is the constants we used to create in normal redux, it is handled by the rtk only here (naming convention: sliceName/reducerName)
      };
      state.users.push(data); //pushing the data to redux's store.
    },
  },
});

export const { addUser } = Slice.actions; //this action will be used by the app
//actions & reducers gets automaticaly created by the createSlice function

export default Slice.reducer; //this reducer is used by the store