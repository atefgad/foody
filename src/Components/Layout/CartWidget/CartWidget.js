import React from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CountryBurger } from "../../../constants/images";
import "./CartWidget.scss";

function CartWidget() {
  return (
    <aside className="cartWidget  rounded-3 me-lg-3">
      {/* Widget Header*/}
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
        <h6 className="text-capitalize m-0">New order Bill</h6>
        <span className="text-gray-500 fs-xs">Monday, 25 Oct, 2021</span>
      </div>
      {/* Widget Body*/}
      <div className="container">
        <div className="cartWidget__body">
          {/* Widget Item*/}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="widget__item bg-secondary rounded-3 mt-3 p-2  d-flex align-items-center justify-content-between"
            >
              <div className="widget__item__img">
                <img src={CountryBurger} alt="Country Burger" />
              </div>
              <div className="widget__item__heading">
                <h6 className="m-0">Country Burger</h6>
                <span className="text-gray-500">$14.00</span>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-column">
                <div className="widget__item__qty bg-white p-1 rounded d-flex align-items-center justify-content-between">
                  <button className="btn btn-second rounded-circle p-0">
                    <IoRemove className=" fs-5 fw-bold" />
                  </button>
                  <span
                    className="fs-5 mx-1 text-center"
                    style={{ width: "1.5rem" }}
                  >
                    1
                  </span>
                  <button className="btn btn-second rounded-circle p-0">
                    <IoAdd className=" fs-5 fw-bold" />
                  </button>
                </div>
                <button
                  className="btn btn-link  fs-xs"
                  style={{ marginTop: "-6px" }}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart__total mt-3">
          <div className="d-flex justify-content-between mb-2">
            <span className="h6 fs-xs text-gray-600 mb-0">Sub total</span>
            <span className="fw-bold text-dark">$1468.29</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="h6 fs-xs text-gray-600 mb-0">
              Tax 10% (VAT Included)
            </span>
            <span className="fw-bold text-dark">$1468.29</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CartWidget;
