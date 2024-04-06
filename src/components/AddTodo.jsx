import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, filterTodos } from "../Features/todo/TodoSlice";
import { toast } from "react-toastify";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [showClear, setShowClear] = useState(false);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(addTodo(input));
  
      dispatch(filterTodos(""));
      setInput("");
    }

    if (input.length === 0) {
      setShowClear(false);
    }
  };
  function clearHandler(e) {
    e.preventDefault();
    setInput("");
    setShowClear(false);
  }
  return (
    <div className="mt-5">
      <form className="space-x-3 ">
        <input
          type="text"
          className="w-[25rem] bg-zinc-900 rounded border border-gray-700 focus:border-orange-600 focus:ring-1 focus:ring-orange-600 text-base outline-none text-gray-100 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowClear(true);
          }}
        />
        <button
          onClick={addTodoHandler}
          className="text-white bg-orange-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg"
        >
          Add Todo
        </button>
        {showClear && (
          <button
            onClick={clearHandler}
            className="text-white bg-zinc-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
}

export default AddTodo;
