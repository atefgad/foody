import React from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

function CartWidgetItem({ item }) {
  return (
    <div
      key={item.id}
      className="widget__item bg-secondary rounded-3 mt-3 p-2  d-flex align-items-center justify-content-between"
    >
      <div className="widget__item__img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="widget__item__heading">
        <h6 className="m-0">{item.title}</h6>
        <span className="text-gray-500">
          ${item.price} - size
          <strong className="ms-1 text-gray-600 text-uppercase">
            {item.size}
          </strong>
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-column">
        <div className="widget__item__qty bg-white p-1 rounded d-flex align-items-center justify-content-between">
          <button className="btn btn-second rounded-circle p-0">
            <IoRemove className=" fs-5 fw-bold" />
          </button>
          <span className="fs-5 mx-1 text-center" style={{ width: "1.5rem" }}>
            1
          </span>
          <button className="btn btn-second rounded-circle p-0">
            <IoAdd className=" fs-5 fw-bold" />
          </button>
        </div>
        <button className="btn btn-link  fs-xs" style={{ marginTop: "-6px" }}>
          remove
        </button>
      </div>
    </div>
  );
}

export default CartWidgetItem;
