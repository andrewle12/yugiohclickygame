import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" isclicked="false" onClick={props.removeFriend}>
      <div className="img-container">
        <img alt={props.name} src={props.src} />
      </div>
      <div className="content" />
    </div>
  );
}

export default FriendCard;
