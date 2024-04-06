import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/todo/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
