import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTodos } from "../Features/todo/TodoSlice";

function FilterTodo() {
  const todos = useSelector((state) => state.todos);
  const [filterValue, setFilterValue] = useState("");
  const [showClearFilter, setshowClearFilter] = useState(true);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filterTodos(filterValue));
  };
  const ClearSearch = (e) => {
    e.preventDefault();
    setFilterValue("");
    dispatch(filterTodos(""));
    setshowClearFilter(true);
  };

  return (
    <div className="w-full absolute flex justify-end mt-5 mr-10">
      <input
        type="text"
        placeholder="Search todo ... "
        className="w-[10rem] bg-zinc-900 rounded-l border border-gray-700 focus:border-orange-600 text-base outline-none text-gray-100 px-5 leading-8 transition-colors duration-200 ease-in-out"
        value={filterValue}
        onChange={(e) => {
          setFilterValue(e.target.value);
          dispatch(filterTodos(filterValue));
          if (e.target.value.length === 0) {
            dispatch(filterTodos(""));
            setshowClearFilter(true);
          } else {
            setshowClearFilter(false);
          }
        }}
      />
      <button
        onClick={handleSearch}
        className="text-white bg-gray-700 border-0 px-2 focus:outline-none hover:bg-gray-500 rounded-r text-sm"
      >
        Search
      </button>
      {!showClearFilter && (
        <button
          onClick={ClearSearch}
          className="w-5 h-5 text-white border-0 px-2 focus:outline-none  rounded-full text-sm absolute right-[4.5rem] top-[0.4rem]"
        >
          ✖️
        </button>
      )}
    </div>
  );
}

export default FilterTodo;
