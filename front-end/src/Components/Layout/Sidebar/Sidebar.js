import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import MainMenuList from "./MainMenuList";
import "./Sidebar.scss";

function Sidebar({ toggle, closeSidebar }) {
  return (
    <aside className={`sidebar ${toggle ? "show" : ""}`}>
      <button
        className="exit__btn btn btn-link"
        onClick={() => closeSidebar(false)}
      >
        <IoClose className="fs-3" />
      </button>
      <div className="logo border-bottom">
        <Link className="d-bock ms-lg-0" to="/">
          {/*<img src={Logo} title="smarty shop" alt="smarty shop logo" />*/}
          <span className="text-dark">foody</span>
          <span className="text-primary fw-bold ms-1">shop</span>
        </Link>
      </div>
      {/* User Avatar */}
      <Avatar />
      {/* Main Menu List */}
      <MainMenuList className="mt-5" />
    </aside>
  );
}

export default Sidebar;
