
//whatever data pushed from our app is stored in this store
import usersReducers from './slice';
import todosReducers from './todoSlice';
//config file for our store
const {configureStore} = require('@reduxjs/toolkit');
export const store = configureStore({ 
    //kind of a func which stores the reducers in form of slices inside this obj.
    reducer: {
        usersData: usersReducers,
        todosData: todosReducers
    } //using the userReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

