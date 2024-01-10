//here we tell the reducers to do the work required
import { configureStore } from '@reduxjs/toolkit';
import { ChangeColor } from './ColorChange';

/*WAREHOUSE of our states, actions etc.*/
export const store = configureStore({
  //it is like a function/action
  //why we should use it? cause it is a function that returns a function. helps us manage those functions
  reducer: {
    //we create a reducer for each slice
    //slices are like functions that we can use to change the state
    ChangeColor: ChangeColor.reducer, //we use the reducer from the ChangeColor slice
  },
});
