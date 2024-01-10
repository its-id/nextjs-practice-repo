import { createSlice } from '@reduxjs/toolkit';

/* A SPECIFIC SLICE OF THE STATE */
export const ChangeColor = createSlice({
  name: 'ChangeColor',
  //we must have an initial state for the reducer
  initialState: {
    color: 'red',
  },
  //these reducers are like functions
  //specific to this slice
  reducers: {
    //this function will take the state and action
    ChangeColorToColor(state, action) {
      //we will change the state to the action payload
      state.color = '#ccc'; //or action.payload; if we are getting the color from the action.payload
    },
  },
});
