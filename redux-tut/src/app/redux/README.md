<img width="631" alt="image-2" src="https://github.com/its-id/nextjs-with-rtk/assets/60315832/f7951a7c-5ef1-4fa0-bb35-bc17224b6270">## Redux & RTK Architecture

> Architecture and flow for both are **almost** same.

In below image, if we need to send data from `<SubArea2>` component to `<Sidebar>` component, we use **Redux Store**.
<img width="741" alt="Screenshot 2024-01-10 at 6 11 18 PM" src="https://github.com/its-id/nextjs-with-rtk/assets/60315832/1ce7d067-210a-4552-ae05-264f8ee0620a">

Looks easy, let's see the underlying architecture:

### Redux Main components:

1. Action
2. Reducer
3. Store
4. Dispatcher

### Flow of data in Redux

<img width="702" alt="Screenshot 2024-01-10 at 6 11 09 PM" src="https://github.com/its-id/nextjs-with-rtk/assets/60315832/af438a91-95d7-4776-896c-b7d7a2d0c02b">

- Data gets dispatched/sent from `view/UI`.
- In `Action`, the data which needs to be stored/added/saved in `redux`'s store is present.
- `Reducer` makes the above happen i.e stores/updates/adds/save `action` data in the `store`.
- `Store` is kind of the database for storing the data.
- Whenever we are in need of a data in a specific `View/UI`, we **subscribe** to it from the store.

## Changes in Redux ToolKit (RTK)

<img width="631" alt="image-2" src="https://github.com/its-id/nextjs-with-rtk/assets/60315832/cec0dce5-d5c5-4001-94b7-5bee2e40d4d5">

Here the both `Action` and `Reducers` are merged together into a single component known as **`Slice`**.

In simple terms,
**Slice**: `Action` + `Redcuers`.

> **Imp Point:** Specific Slice can be used for specific task.

To understand the flow of data and working of different actions and reducers: install redux-dev-tools

## Interview Questions

Q1. Does redux's data stays after your page reloads?
Ans. No. It gets removed as we don't store it in localstorage. It gets stored as an object in the state and gets cleared just like a state.

Q2. Any ways to retain the data after refresh?
Ans. Two ways: 1. Call API and set the store data again. 2. Use redux persist. (makes our app slow, so not recommended.)

Q3. Is redux's data flow bi-directional or uni-directional?
Ans. Uni-directional - data flows only from ui -> action -> reducers -> store.
(Bi-directional - data can go back from store to reducers to actions to back to state and vice-versa.)

Q4. Can we use multiple stores in one react.js application?
Ans. NO! only one store is allowed.

Q5. Can we use redux with localstorage and what is use of localstorage?
Ans. Yes, we can use redux with localstorage.
Localstorage is used for storing such data which always stays, even if you close/refresh the web app. 
Usecase: to add a user info like token, username, useremail etc.

Q6. Core principles of Redux?
Ans. 1. Single source of truth - the state of your whole application is stored in an object tree within a single store.
    2. State is read-only - we can't change the state directly. We can only change it by dispatching actions.
    3. Changes are made with pure functions - reducers are pure functions. They don't change the state directly. They make a copy of the state and then change it.

Q7. What is Redux?
Ans. Redux is a state management library.
     With redux, we can share data between components.
     **Redux can use with any JS framework or library.**
    Like: React, Angular, Vue, or core JS also

Q8. Can we create 2 store in redux?
Ans. No, we can create only one store in redux.

Q9. Redux vs RTK?
Ans. Redux is a state management library.
    RTK is a wrapper over the redux. 
    RTK is easy to use. 
    RTK file structure is simpler to redux.

Q10. What is useDispatch?
Ans. Hook in redux.
    Used for passing data from component to redux store.

Q11. Difference between store and state?
Ans. Store is an object that holds the entire state of the application.
    State is the data that current component needs to render its UI.

Q12. What is use of Provider in React Redux?
Ans. Provider is a **component** in react-redux.
     Makes redux store available to any component of application.

Q13. Popular redux middlewares?
Ans. Middlewares are needed when we want to do async actions in redux.
     Redux thunk - **by default used in RTK**
     Redux saga, Redux observable.

Q14. What is a slice in redux?
Ans. collection of reducers and actions.

Q15. Where we should not use redux?
Ans. Small and simple applications.
     Applications without complex state management needs.
     Applications with a different state management library.

Q16. Main components (parts) of redux?
Ans. Action, Reducer, Store, Provider.

Q17. Alternative of redux?
Ans. MobX, Recoil, Context API.

Q18. How to debug redux?
Ans. use of redux devtools extension.
     log actions and state changes.
     use unit tests.
     browser debugger.

