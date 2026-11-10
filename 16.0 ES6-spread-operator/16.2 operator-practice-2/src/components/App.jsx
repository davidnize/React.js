import React, { useState } from "react";

function App() {
  const [todo, setToDo] = useState([]);

  function toDoList(event) {
    event.preventDefault();

    const { value } = event.target.todo;
    console.log(value);

    setToDo((prev) =>
      [...prev, value]
  );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={toDoList}>
          <input name="todo" type="text" placeholder="add a to do" />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {todo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
