import React from "react";
import { Button, Navbar } from "react-bootstrap";
import "./Header.scss";

// import Icons
import {
  IoMenu,
  IoNotificationsOutline,
  IoBarcodeOutline,
  IoAddSharp,
  IoFastFoodOutline,
  IoClose,
} from "react-icons/io5";
// import MenuList from "../../MenuList/MenuList";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

export default function Header({ toggle, setToggle, showCart, setShowCart }) {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      {/* container */}
      <div className="container-fluid justify-content-lg-end">
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
          <div className="navbar-tool  mx-2  d-none d-lg-block">
            <button className="btn btn-second rounded-1">
              <IoBarcodeOutline className="fw-bold fs-4" />
            </button>
          </div>
          <div className="navbar-tool  me-2  d-none d-lg-block">
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

        <div className="">
          {/*  
        <h6 className=" m-0">Order #258</h6>
          <span className="text-gray-500 fs-xs">Opened 7:45 am</span>
  */}

          <button
            type="button"
            className="d-flex align-items-center btn btn-primtary rounded-1  position-relative"
            onClick={() => setShowCart(!showCart)}
          >
            <span
              className="p-2 position-absolute translate-middle  badge rounded-pill bg-second"
              style={{ left: "12px", top: "9px" }}
            >
              {cartItems.length}
            </span>
            <IoFastFoodOutline className="fs-1" />
            <div className="position-relative">
              {showCart ? (
                <span className="fs-3 d-lg-none" tooltip="close">
                  <IoClose />
                </span>
              ) : (
                <span className="fs-6 ms-1">InOrder</span>
              )}
            </div>
          </button>
        </div>
        {/* Right Box-icon:END */}
      </div>
      {/* container:END */}

      {/* Right Sidebar[Cart] */}

      {/* Navbar:END */}
    </Navbar>
  );
}
