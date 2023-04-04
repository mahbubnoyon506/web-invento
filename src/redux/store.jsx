import { configureStore } from "@reduxjs/toolkit";

import todosReducer from './features/Todos'

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
})