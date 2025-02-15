import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      {/* Form to add a new to-do item */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Add
        </button>
      </form>

      {/* List of to-do items */}
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;