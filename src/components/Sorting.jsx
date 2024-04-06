import React from "react";
import { useDispatch } from "react-redux";
import {
  sortTodosByIdAsc,
  sortTodosByIdDesc,
  sortTodosByText,
} from "../Features/todo/TodoSlice";

function Sorting() {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "asc":
        dispatch(sortTodosByIdAsc());
        break;
      case "desc":
        dispatch(sortTodosByIdDesc());
        break;
      case "alpha":
        dispatch(sortTodosByText());
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[13.5rem] h-[8rem] absolute flex flex-col justify-center items-center  top-[8rem] right-[1rem] bg-zinc-800 rounded-lg  ">
      <label htmlFor="SortTodo" className="text-white text-xl mb-3">
        Sort Todos
      </label>
      <select
        name="SortTodo"
        id="SortTodo"
        className="w-[10.5rem] h-[2.5rem]  bg-zinc-900 rounded-l border border-gray-700 focus:border-orange-600 text-base outline-none text-gray-100 px-2 leading-8 transition-colors duration-200 ease-in-out"
        onChange={handleSortChange}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
        <option value="alpha">Alphabetically</option>
      </select>
    </div>
  );
}

export default Sorting;
