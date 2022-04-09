import React, { useState } from "react";
import PaymentsWidget from "./PaymentsWidget";
import "./CartWidget.scss";
import CartWidgetItem from "./CartWidgetItem";
import { useDispatch, useSelector } from "react-redux";
import NoCartItems from "../../NoCartItems";
import { motion, AnimatePresence } from "framer-motion";
import { openModal } from "../../../store/modalSlice";
import { addNewOrder } from "../../../store/ordersSlice";
import { clearCart } from "../../../store/cartSlice";

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

function CartWidget({ showCart }) {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const [payment, setPayment] = useState("");
  const dispatch = useDispatch();

  const taxPrice = (totalPrice, percentage) => {
    const tPrice = totalPrice * (percentage / 100);
    return tPrice.toFixed(2);
  };
  const totalPrice = (totalPrice, percentage) => {
    const tPeice = totalPrice * (percentage / 100) + totalPrice;
    return tPeice.toFixed(2);
  };

  const subTotal = cartTotalAmount.toFixed(2);

  const handleSubmitOrder = () => {
    const orderDate = {
      orderItems: [...cartItems],
      paymentStatus: {
        name: payment,
        status: "success",
      },
      orderStatus: "",
      subTotal,
      taxs: taxPrice(cartTotalAmount, 10),
      totalPrice: totalPrice(cartTotalAmount, 10),
    };

    dispatch(addNewOrder(orderDate));

    setTimeout(() => {
      dispatch(openModal("OrderBill"));
      dispatch(clearCart());
    }, 1000);
  };
  return (
    <div className={`cartWidget rounded-3 me-lg-3 ${showCart ? "show" : ""}`}>
      {cartItems.length > 0 ? (
        <React.Fragment>
          {/* Widget Header */}
          <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
            <h6 className="text-capitalize m-0">New order Bill</h6>
            <span className="text-gray-500 fs-xs">{getTodayDate()}</span>
          </div>
          {/* Widget Body */}
          <div className="container">
            <div className="cartWidget__body">
              <AnimatePresence>
                {cartItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      translateX: 50,
                      translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    exit={{
                      translateX: -300,
                      opacity: 0,
                      duration: 0.4,
                      delay: 0.3,
                    }}
                    transition={{ duration: 0.3, delay: i * 0.3 }}
                  >
                    {/* Widget Item*/}
                    <CartWidgetItem item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Widget Cart Price */}
            <div className="cart__total mt-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="h6 text-gray-600 mb-0">Sub total</span>
                <span className="fw-bold text-dark">${subTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span className="h6 text-gray-600 mb-0">
                  Tax 10% (VAT Included)
                </span>
                <span className="fw-bold text-dark">
                  ${taxPrice(cartTotalAmount, 10)}
                </span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-1">
                <span className="h6 text-primary fw-bold mb-0">Total</span>
                <span className="fw-bold text-success">
                  ${totalPrice(cartTotalAmount, 10)}
                </span>
              </div>
            </div>

            <hr />
            {/* Payments Widget */}
            <PaymentsWidget payment={payment} setPayment={setPayment} />

            <div className="text-center">
              <button
                type="button"
                className="btn btn-lg btn-primary w-100 rounded-1  position-relative"
                disabled={payment === ""}
                onClick={handleSubmitOrder}
              >
                place Order
              </button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <NoCartItems />
      )}
    </div>
  );
}

export default CartWidget;
