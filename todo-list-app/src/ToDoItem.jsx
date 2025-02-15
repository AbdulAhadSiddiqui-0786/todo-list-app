import React, { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between p-3 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="w-5 h-5 cursor-pointer"
      />

      {/* Task Text or Edit Input */}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-1 mx-3 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      ) : (
        <span
          className={`flex-1 mx-3 text-gray-800 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Edit/Save Button */}
      <button
        onClick={handleEdit}
        className="px-3 py-1 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition-colors"
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors ml-2"
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;