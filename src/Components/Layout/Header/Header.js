import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import "./Header.scss";

// import Icons
import {
  IoMenu,
  IoNotificationsOutline,
  IoBarcodeOutline,
  IoAddSharp,
} from "react-icons/io5";

// import MenuList from "../../MenuList/MenuList";
import SearchBox from "./SearchBox";

export default function Header({ toggle, setToggle }) {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      {/* container */}
      <div className="container-fluid justify-content-end">
        <Button
          className="navbar-toggler btn__toggle border-0 text-black"
          onClick={() => setToggle(!toggle)}
        >
          <IoMenu style={{ fontSize: "1.8rem" }} />
        </Button>

        {/* SearchBox */}
        <SearchBox className="search__bar bg-secondary w-50 p-0 ps-2 me-lg-3 rounded" />

        {/* Right Box-icon */}
        <div className="d-flex align-items-center">
          <div className="navbar-tool  mx-2">
            <button className="btn btn-second rounded-1">
              <IoBarcodeOutline className="fw-bold fs-4" />
            </button>
          </div>
          <div className="navbar-tool  me-2">
            <button className="btn btn-second rounded-1">
              <IoNotificationsOutline className="fw-bold fs-4" />
            </button>
          </div>
          <div className="navbar-tool me-2 d-none d-lg-block">
            <button className="btn btn-primary rounded-1 w-100">
              <IoAddSharp className="fw-bold me-1" />
              Add New Item
            </button>
          </div>

          <div className="border-start ms-3 ps-2" style={{ height: 30 }}></div>
        </div>

        <div className="d-flex align-items-center flex-column d-none d-lg-block">
          <h6 className=" m-0">Order #258</h6>
          <span className="text-gray-500 fs-xs">Opened 7:45 am</span>
        </div>
        {/* Right Box-icon:END */}
      </div>
      {/* container:END */}

      {/* Right Sidebar[Cart] */}

      {/* Navbar:END */}
    </Navbar>
  );
}
