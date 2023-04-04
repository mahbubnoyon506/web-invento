import { createSlice } from "@reduxjs/toolkit";
import { TodosData } from "../../TodosData";

const initialState = {
  value: TodosData,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers:{
    addToTodo : (state, action) => {
      state.value.push(action.payload)
    },
    removeTodo : (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id)
    },
    updateToTodo : (state, action) => {
      state.value.map((todo) => {
        if(todo.id === action.payload.id){
          todo.title = action.payload.title,
          todo.completed = action.payload.completed
        }
      })
    }
  }
});
export const {addToTodo, removeTodo, updateToTodo} = todosSlice.actions;
export default todosSlice.reducer;