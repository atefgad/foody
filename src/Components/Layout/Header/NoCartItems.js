import React from "react";
import { Link } from "react-router-dom";
import EmptyBasket from "../../../Assets/images/empty-basket.gif";

function NoCartItems({ setCloseCart }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between">
      <div className="mt-md-7 mt-sm-5">
        <img src={EmptyBasket} alt="Empty Basket" width="160" />
      </div>
      <h5 className="text-dark">Your shopping cart looks empty!</h5>
      <span className="text-muted">What are you waiting for?</span>
      <Link
        to="/"
        className="btn btn-primary btn-lg rounded-0 mt-3"
        onClick={setCloseCart ? () => setCloseCart(false) : null}
      >
        Start Shopping!
      </Link>
    </div>
  );
}

export default NoCartItems;
