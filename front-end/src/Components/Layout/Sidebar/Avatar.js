import React from "react";
import { avatar } from "../../../constants/images";

function Avatar({ className }) {
  return (
    <div className={`avatar  ${className ? className : ""}`}>
      <div className="avatar__img ">
        <img className="zoom-hover" src={avatar} alt="user" />
      </div>
      <div className="text-lg-center mt-3">
        <h6 className="avatar__name m-0">Jone A. Edward</h6>
        <span className="avatar__title text-muted">I'm a cashier 🙂</span>
      </div>
    </div>
  );
}

export default Avatar;
