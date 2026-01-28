import React, { useState } from "react";

function Exercise4() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Exercise 4 - Todo List</h2>

      {/* Input + Button */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập công việc..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Thêm
        </button>
      </div>

      {/* Danh sách công việc */}
      <ul className="list-group">
        {todos.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTodo(index)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise4;
