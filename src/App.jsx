import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import ClearAllTodos from "./components/ClearAllTodos";
import FilterTodo from "./components/FilterTodo";
import Sorting from "./components/Sorting";

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-zinc-900 flex flex-col justify-start items-center relative">
      <h1 className="text-3xl font-bold text-zinc-300 mt-10">Todo App 📝</h1>
      <AddTodo />
      <Todos />
      <ClearAllTodos />
      <FilterTodo />
      <Sorting />
    </div>
  );
}

export default App;
