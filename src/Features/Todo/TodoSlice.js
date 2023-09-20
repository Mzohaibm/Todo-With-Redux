
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello",
        },
    ],
};

export const TodoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        AddTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        RemoveTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { AddTodo, RemoveTodo } = TodoSlice.actions;

export default TodoSlice.reducer;

// import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

// // Action creators
// export const addTodo = createAction("Todo/AddTodo");
// export const removeTodo = createAction("Todo/RemoveTodo");

// const initialState = {
//     todos: [
//         {
//             id: 1,
//             text: "Hello",
//         },
//     ],
// };

// // Reducer function
// export const TodoSlice = createReducer(initialState, {
//     [addTodo]: (state, action) => {
//         const todo = {
//             id: nanoid(),
//             text: action.payload,
//         };
//         state.todos.push(todo);
//     },
//     [removeTodo]: (state, action) => {
//         state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
// });

// export default TodoSlice.reducer;



// in reducers we have properties and functions
// we can also set function as a reference with property no need to call
// inside reducers inside our function we have two parameters the first one is state, and second one is action the state is our initialstate and action is hanlde logic for state to update ,add and remove something
// from this with state and action we can play with array and obj methods according to our logic filter is just return true values we need to export reducers in two parts the first one we export our functionality inside reducers mean individual we need to export our all reducers and also we need to export reducer object
// use dispatch and useselector is actually the parts of react-redux