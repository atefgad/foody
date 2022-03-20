import React from "react";
import { NavLink } from "react-router-dom";
import "./CatListItem.scss";

function CatListItem({ category }) {
  const { name, icon, path } = category;
  return (
    <NavLink className="CatListItem" to={path}>
      <div className="CatListItem__icon">{icon}</div>
      <span className="fw-bold">{name}</span>
    </NavLink>
  );
}

export default CatListItem;
