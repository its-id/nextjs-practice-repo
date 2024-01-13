import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state: any, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.todos.push(data);
    },
    removeTodo: (state: any, action) => {
      const updatedTodos = state.todos.filter(
        (todo: any) => todo.id !== action.payload
      );
      state.todos = updatedTodos;
    },
  },
});

export const { addTodos, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
