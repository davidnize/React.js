import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  function addNote() {
    const [notes, setNotes] = useState([]);

    setNotes((prevNote) => [
      ...prevNote,
      {title, content},
    ]);
  }

  return (
    <div>
      <Header />
      <CreateArea 
        addNote={addNote}
      />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
