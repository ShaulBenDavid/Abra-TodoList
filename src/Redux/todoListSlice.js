import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};


export const todoSlice = createSlice({
    name: "Todo List",
    initialState,
    reducers: {
        addNewTodo: (state, action) => {
            const newTodo = action.payload;

            state.todos = [...state.todos, newTodo];
        },
        todoIsCoplete: (state, action) => {
            const todoId = action.payload;

            state.todos[todoId].isComplete = !state.todos[todoId].isComplete;
        },
        removeTodo: (state, action) => {
            const todoToRemove = action.payload;

            state.todos.splice(todoToRemove, 1);
        }
    },
});

export const { addNewTodo, todoIsCoplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
