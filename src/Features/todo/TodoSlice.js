import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  todos: [],
  nextTodoId: 1,
  filterText: "",
};
const savedTodos = JSON.parse(localStorage.getItem("todos"));
if (savedTodos) {
  initialState.todos = savedTodos;
  initialState.nextTodoId =
    Math.max(...savedTodos.map((todo) => todo.id), 0) + 1;
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.nextTodoId,
        text: action.payload,
      };
      if (!state.todos.some((todo) => todo.text === newTodo.text)) {
        state.todos.push(newTodo);
        toast.success("Todo added Sucessfully");
        state.nextTodoId += 1;
      } else {
        toast.error("Todo Already Exist");
      }
      // Save todos to local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      toast.warning("Todo Deleted ");
      // Save todos to local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      // Check if the new text is different and does not match any existing todo
      if (
        newText !== state.todos.find((todo) => todo.id === id)?.text &&
        !state.todos.some((todo) => todo.text === newText)
      ) {
        state.todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        );
        toast.success("Todo edited Sucessfully");
      } else {
        toast.error("Todo Already Exist");
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteAllTodo: (state, action) => {
      state.todos = [];
      state.nextTodoId = 1;
      toast.warning("All Todo's Deleted");
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    filterTodos: (state, action) => {
      state.filterText = action.payload;
    },
    sortTodosByIdAsc: (state) => {
      state.todos = state.todos.sort((a, b) => a.id - b.id);
    },

    sortTodosByIdDesc: (state) => {
      state.todos = state.todos.sort((a, b) => b.id - a.id);
    },

    sortTodosByText: (state) => {
      state.todos = state.todos.sort((a, b) => a.text.localeCompare(b.text));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  deleteAllTodo,
  filterTodos,
  sortTodosByIdAsc,
  sortTodosByIdDesc,
  sortTodosByText,
} = todoSlice.actions;
export default todoSlice.reducer;
