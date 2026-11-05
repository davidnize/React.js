import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  function changeName(event) {
    setInputValue(event.target.value);
  }
  // console.log(name);

  function submitName() {
    setName(inputValue);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={changeName}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={submitName}>Submit</button>
    </div>
  );
}

export default App;
