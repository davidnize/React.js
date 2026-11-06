import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
     fName: "",
     lNmame: ""
  });

  function getFullName(event) {
    
    setFullName(event.target.name);
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName}
      </h1>
      <form>
        <input name="fName" onChange={getFullName} placeholder="First Name" />
        <input name="lName" onChange={getFullName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
