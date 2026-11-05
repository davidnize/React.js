import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

function changeName(event) {
  setInputValue(event.target.value);
}


  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input 
      
      onChange={changeName}
      type="text" placeholder="What's your name?" />
      <button onClick={changeName}>Submit</button>
    </div>
  );
}

export default App;
