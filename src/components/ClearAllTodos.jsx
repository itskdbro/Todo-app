import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllTodo } from "../Features/todo/TodoSlice";

function ClearAllTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function clearAllTodoHandler(e) {
    e.preventDefault();
    dispatch(deleteAllTodo());
  }
  return (
    <div className="w-[40rem] mt-4 flex justify-end  ">
      {todos.length !== 0 && (
        <button
          onClick={clearAllTodoHandler}
          className="text-white bg-red-700 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default ClearAllTodos;
