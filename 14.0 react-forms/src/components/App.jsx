import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  function changeName(event) {
    setInputValue(event.target.value);
  }
  // console.log(name);

  function submitName(event) {
    setName(inputValue);


    event.preventDefault()

  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={submitName}>
        <input
          onChange={changeName}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
