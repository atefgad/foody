import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Bannar } from "../../../Components";
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
          <span className="text-dark">
            f<span className="text-primary fw-bold fs-2">oo</span>dy
          </span>
          <span className="text-second fs-6 fw-bold  ms-1">resturant</span>
        </Link>
      </div>
      {/* User Avatar */}
      <Avatar />
      {/* Main Menu List */}
      <MainMenuList className="mt-5" />

      <Bannar />
    </aside>
  );
}

export default Sidebar;
