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

## Interview Questions

Q1. Does redux's data stays after your page reloads?
Ans. No. It gets removed as we don't store it in localstorage. It gets stored as an object in the state and gets cleared just like a state.

Q2. Any ways to retain the data after refresh?
Ans. Two ways: 1. Call API and set the store data again. 2. Use redux persistance. (makes our app slow, so not recommended.)

Q3. Is redux's data flow bi-directional or uni-directional?
Ans. Uni-directional - data flows only from ui -> action -> reducers -> store.
(Bi-directional - data can go back from store to reducers to actions to back to state and vice-versa.)
