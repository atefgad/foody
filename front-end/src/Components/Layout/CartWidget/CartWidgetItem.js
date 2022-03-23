import React, { useEffect, useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import {
  increaseCart,
  cartTotalPrice,
  decreaseCart,
  removeCartItem,
} from "../../../store/cartSlice";

function CartWidgetItem({ item }) {
  const { cart } = useSelector((state) => state);

  const [quantity, setQuantity] = useState(item.quantity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotalPrice());
  }, [dispatch, cart, quantity]);

  const handleIncrease = (cartItem) => {
    setQuantity(quantity + 1);
    dispatch(increaseCart(cartItem));
  };
  const handleDecrease = (cartItem) => {
    setQuantity(quantity - 1);
    dispatch(decreaseCart(cartItem));
  };
  const handleRemoveItem = (cartItem) => {
    dispatch(removeCartItem(cartItem));
  };
  return (
    <div
      key={item.id}
      className="widget__item bg-secondary rounded-3 mt-3 p-2  d-flex align-items-center justify-content-between"
    >
      <div className="widget__item__img">
        <img
          src={`https://api.atef-gad.com/products${item.image}`}
          alt={item.title}
        />
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
          <button
            className="btn btn-second rounded-circle p-0"
            disabled={quantity === 1}
            onClick={() => handleDecrease(item)}
          >
            <IoRemove className=" fs-5 fw-bold" />
          </button>
          <span className="fs-5 mx-1 text-center" style={{ width: "1.5rem" }}>
            {quantity}
          </span>
          <button
            className="btn btn-second rounded-circle p-0"
            onClick={() => handleIncrease(item)}
          >
            <IoAdd className=" fs-5 fw-bold" />
          </button>
        </div>
        <button
          className="btn btn-link  fs-xs"
          style={{ marginTop: "-6px" }}
          onClick={() => handleRemoveItem(item)}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default CartWidgetItem;
