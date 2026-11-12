import React, { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  function mouseOver() {
    setHover(true);
  }

  function mouseOut() {
    setHover(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor: hover ? "black" : "white" }}
      >
       Submit
      </button>
    </div>
  );
}

export default App;
