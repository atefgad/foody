import React from "react";
import PaymentsWidget from "./PaymentsWidget";
import "./CartWidget.scss";
import CartWidgetItem from "./CartWidgetItem";
import { useSelector } from "react-redux";

const getTodayDate = () => {
  var theDate = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = weekday[theDate.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfMonth = theDate.getDate();
  const curMonth = months[theDate.getMonth()];
  const curYear = theDate.getFullYear();
  return `${dayOfWeek}, ${dayOfMonth} ${curMonth} ${curYear}`;
};

function CartWidget() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  return (
    <div className="cartWidget rounded-3 me-lg-3 d-none d-lg-block">
      {/* Widget Header */}
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
        <h6 className="text-capitalize m-0">New order Bill</h6>
        <span className="text-gray-500 fs-xs">{getTodayDate()}</span>
      </div>
      {/* Widget Body */}
      <div className="container">
        {cartItems.length > 0 ? (
          <div className="cartWidget__body">
            {/* Widget Item*/}
            {cartItems.map((item) => (
              <CartWidgetItem item={item} />
            ))}
          </div>
        ) : null}

        {/* Widget Cart Price */}
        <div className="cart__total mt-4">
          <div className="d-flex justify-content-between mb-1">
            <span className="h6 text-gray-600 mb-0">Sub total</span>
            <span className="fw-bold text-dark">${cartTotalAmount}</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <span className="h6 text-gray-600 mb-0">
              Tax 10% (VAT Included)
            </span>
            <span className="fw-bold text-dark">
              ${cartTotalAmount * (10 / 100)}
            </span>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-1">
            <span className="h6 text-primary fw-bold mb-0">Total</span>
            <span className="fw-bold text-success">
              ${cartTotalAmount * (10 / 100) + cartTotalAmount}
            </span>
          </div>
        </div>

        <hr />
        {/* Payments Widget */}
        <PaymentsWidget />
      </div>
    </div>
  );
}

export default CartWidget;
