import React from "react";
// Styles
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="title">~ Marko ~</div>
      <div className="menuitems">
        <a href="https://github.com/yjuwaheer/Marko_Markdown" target="_blank" rel="noreferrer" className="menuitem">
          <i class="fa fa-github"></i>
          <span style={{marginLeft: 10}}>Github</span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
