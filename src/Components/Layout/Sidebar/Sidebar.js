import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import "./Sidebar.scss";

function Sidebar({ toggle }) {
  return (
    <aside className={`sidebar ${toggle ? "no-sidebar" : ""}`}>
      <div className="logo border-bottom">
        <Link className="d-bock ms-lg-0" to="/">
          {/*<img src={Logo} title="smarty shop" alt="smarty shop logo" />*/}
          <span className="text-dark">foody</span>
          <span className="text-primary fw-bold ms-1">shop</span>
        </Link>
      </div>
      <Avatar />
    </aside>
  );
}

export default Sidebar;
