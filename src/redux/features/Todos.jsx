import { createSlice } from "@reduxjs/toolkit";
import { TodosData } from "../../TodosData";

const initialState = {
  value: TodosData,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
});
export const {addToTodo, removeTodo, updateToTodo} = todosSlice.actions;
export default todosSlice.reducer;