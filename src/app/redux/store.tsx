//whatever data pushed from our app is stored in this store

//config file for our store
const {configureStore} = require('@reduxjs/toolkit');
export const Store = configureStore({ 
    //kind of a func which stores the reducers in form of slices inside this obj.

    reducer: {},


});

