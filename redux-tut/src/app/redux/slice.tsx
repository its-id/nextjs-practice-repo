/*
slice is basically the highlight of redux-toolkit
it combines the work of reducers and action in redux architecture
Note: both action and reducers should be of the same feature
      Eg: if you are making slice for handling auth, reducers and action should be of auth 
      (will not work: action of product and reducer of auth)
*/
import {
  createAsyncThunk,
  createSlice,
  current,
  nanoid,
} from '@reduxjs/toolkit'; //nanoid: to generate unique id

//when the app loads, this is the state which gets created
const initialState = {
  isLoading: false,
  userAPIData: [],
  users: localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users') || '')
    : [], //if users data is present in localstorage, then use that data, else use empty array
};

//to handle the promise from API, we use createAsyncThunk
//first arg: name of the thunk
//second arg: function which returns a promise
export const fetchAPIData = createAsyncThunk('fetchUsersThunk', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
});

const Slice: any = createSlice({
  name: 'users-slice',
  initialState,
  reducers: {
    //reducer to add the user
    addUser: (state: any, action: any) => {
      //creating the data to pushed into redux's store
      const data = {
        id: nanoid(),
        name: action.payload, //action contains the type and payload. 'type' is the constants we used to create in normal redux, it is handled by the rtk only here (naming convention: sliceName/reducerName)
      };

      const newUsers = [...state.users, data]; //create a new array with the new data

      //we can't directly access the state data due to internal working of promises in rtk
      //to get the live current data, we use .current property
      console.log(current(state.users));

      //also add the data to the localstorage
      //we also want to stringify the data, since redux doesn't support objects
      localStorage.setItem('users', JSON.stringify(newUsers));

      return {
        ...state,
        users: newUsers,
      };
    },
    //reducer to remove the user
    removeUser: (state: any, action: any) => {
      const updatedUsers = state.users.filter(
        (user: any) => user.id !== action.payload
      );

      //remove specific user from localstorage. it's already corrected in redux's store, so update it in localstorage.
      localStorage.removeItem('users');
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      return {
        ...state,
        users: updatedUsers,
      }
    },
  },
  //we use extraReducers to deal with an action already defined somewhere else
  //in our case its the createAsyncThunk action
  extraReducers: (builder) => {
    //builder: object containing all the reducers
    //addCase: used to add the reducer
    //when our api call if fullfilled, we update the state
    builder.addCase(fetchAPIData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userAPIData = action.payload;
    });
  },
});

export const { addUser, removeUser } = Slice.actions; //this action will be used by the app
//actions & reducers gets automaticaly created by the createSlice function

export default Slice.reducer; //this reducer is used by the store
