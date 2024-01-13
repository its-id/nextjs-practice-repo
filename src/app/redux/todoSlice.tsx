import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state:any, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(data);
        }
    }

})

export const { addTodos } = TodoSlice.actions;

export default TodoSlice.reducer;