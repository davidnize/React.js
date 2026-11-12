import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(event) {
    const { value } = event.target;
    console.log(value);
    setTitle(value);
  }
  function handleContent(event) {
    const { value } = event.target;
    console.log(value);
    setContent(value);
  }

  function handleNote(event) {
    event.preventDefault();
    props.addNote(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={handleNote}>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
