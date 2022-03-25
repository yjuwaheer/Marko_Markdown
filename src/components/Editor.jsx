import React from "react";
// Styles
import "../styles/Editor.css";

const Editor = ({ setText }) => {
  return (
    <div className="Editor">
      <textarea
        className="textArea"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Start typing here..."
        autoFocus
      />
    </div>
  );
};

export default Editor;
