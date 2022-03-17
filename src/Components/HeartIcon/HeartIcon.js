import React from "react";
import "./HeartIcon.scss";

function HeartIcon({ onClick, active }) {
  return (
    <div className={`heart ${active}`} onClick={onClick}>
      <div className="heart-icon" />
    </div>
  );
}

export default HeartIcon;
