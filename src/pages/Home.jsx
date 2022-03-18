import React, { useState } from "react";
// Components
import Menu from "../components/Menu";
import Editor from "../components/Editor";
import Viewer from "../components/Viewer";

const Home = () => {
  // Hooks
  const [text, setText] = useState("");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />
      <Editor setText={setText} />
      <div>
        <Viewer text={text} />
      </div>
    </div>
  );
};

export default Home;
