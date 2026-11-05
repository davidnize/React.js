import React, { useState } from "react";

function App() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  
  function firstName(event) {
    setFirstName(event.target.value)
  }
  function lastName(event) {
    setLastName(event.target.value)
  }


  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input onChange={firstName} name="fName" placeholder="First Name" />
        <input onChange={lastName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
