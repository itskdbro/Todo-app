// TodoItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, filterTodos } from "../Features/todo/TodoSlice";
import { toast } from "react-toastify";

function TodoItem({ todo, filterText }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    dispatch(editTodo({ id: todo.id, newText: editedText }));
    setIsEditing(false);
  };

  // Check if the todo matches the filter criteria
  const matchesFilter = todo.text.includes(filterText);

  // Don't render the todo if it doesn't match the filter
  if (!matchesFilter) {
    return null;
  }

  return (
    <li
      className="w-[33.5rem] mb-5 flex justify-between items-center bg-zinc-900 px-4 py-2 rounded"
      key={todo.id}
    >
      {isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className=" w-[28rem] mr-2 p-1 border border-zinc-700 bg-zinc-800 text-white rounded"
          />
          <button
            onClick={handleEdit}
            className="text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-md"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex  gap-3">
          <div className="text-white">{todo.id}.</div>
          <div className="text-white">{todo.text}</div>
        </div>
      )}

      <div className="flex gap-2">
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-white bg-blue-500 border-0 py-1 px-2 mr-2 focus:outline-none hover:bg-blue-600 rounded text-md"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              🗑️ Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
