//warehouse of our states, actions etc.

//here we tell the reducers to do the work required
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    //it is like a function/action
    //why we should use it? cause it is a function that returns a function. helps us manage those functions
    reducer: {
        //created in slices: 
    }
})

