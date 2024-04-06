import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import { filterTodos } from "../Features/todo/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const filterText = useSelector((state) => state.filterText);
  const filteredTodos = todos.filter((todo) => todo.text.includes(filterText));

  if (filteredTodos.length === 0) {
    return (
      <h1 className="text-lg font-medium mt-40 bg-zinc-700 p-2 px-6 rounded-lg text-zinc-300 ">
        No todos found
      </h1>
    );
  }
  return (
    <div className="w-[40rem] h-[25rem] overflow-y-auto bg-zinc-800 flex flex-col justify-start items-center  mt-5 pt-10 rounded-lg  relative  ">
      <ul className="list-none">
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} filterText={filterText} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
