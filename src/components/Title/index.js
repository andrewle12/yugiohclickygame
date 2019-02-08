import React from "react";
import "./style.css";

function Title(props) {
  return (
    <h3 className="title">
      <span className="clicky">YuGiOh! Clicky Game</span>
      <div id="message"> Try not to click the same card more than once!</div>
      {}
    </h3>
  );
}

export default Title;
