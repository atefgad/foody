import React from "react";
import "./Styles.scss";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function OrderBill() {
  return (
    <div className="order__bill text-center">
      <div className="my-3">
        <IoCheckmarkCircleOutline className="icon text-success " />
      </div>
      <h3 className="text">order placed successful</h3>
      <p className="text-gray-500 fs-6 ">Receipt #34435435</p>
      <button className="btn btn-lg btn-primary mb-2 rounded-pill">
        view order
      </button>
    </div>
  );
}

export default OrderBill;
