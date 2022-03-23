import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./ProductCard.scss";

import { Page404 } from "../../Pages";

import { addToCart } from "../../store/cartSlice";

function ProductCard({ data }) {
  const { id, title, image, price, newPrice } = data;
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);

  const [size, setSize] = useState("");

  // Update Price By Size
  let updatedPrice = undefined;
  switch (size) {
    case "m":
      updatedPrice = (newPrice !== null ? newPrice : price) + 3;
      break;
    case "l":
      updatedPrice = (newPrice !== null ? newPrice : price) + 5;
      break;

    default:
      updatedPrice = newPrice !== null ? newPrice : price;
      break;
  }
  // handleAddToCart
  const handleAddToCart = (productData) => {
    if (size !== "") {
      const addData = {
        ...productData,
        size,
        price: updatedPrice.toFixed(2),
      };
      dispatch(addToCart(addData));
      // setTimeout(() => {}, 3000);
    } else {
      alert("Please choose size");
    }
  };

  // check if isnt exist product show Error Page404
  if (!data) return <Page404 />;
  return (
    <div className="col-md-4">
      <div className="product__card card card-shadow p-3 mb-4 text-center border-0">
        <div className="product__img">
          <img
            src={`https://api.atef-gad.com/products${image}`}
            alt={title}
            width="100"
            height="100"
          />
        </div>
        <div className="text-center">
          <h5 className="h6">{title}</h5>
          {newPrice !== null ? (
            <React.Fragment>
              <del className="fs-6 me-2">${price}</del>
              <span className="fs-6 fw-bold">${newPrice}</span>
            </React.Fragment>
          ) : (
            <span className="fs-6 fw-bold">${price}</span>
          )}
        </div>
        {/* Size[radio box] */}
        <div className="mt-3 d-flex align-items-center justify-content-between">
          <div className="product__size">
            <input
              type="radio"
              className="btn-size-check"
              name="size"
              id={`s-${id}`}
              value="s"
              checked={size === "s"}
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              className="btn btn-secondary text-muted py-2 px-3"
              htmlFor={`s-${id}`}
            >
              S
            </label>

            <input
              type="radio"
              className="btn-size-check"
              name="size"
              id={`m-${id}`}
              value="m"
              checked={size === "m"}
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              className="btn btn-secondary text-muted py-2 px-3"
              htmlFor={`m-${id}`}
            >
              M
            </label>

            <input
              type="radio"
              className="btn-size-check"
              name="size"
              id={`l-${id}`}
              value="l"
              checked={size === "l"}
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              className="btn btn-secondary text-muted py-2 px-3"
              htmlFor={`l-${id}`}
            >
              L
            </label>
          </div>
          <button
            className="btn btn-outline-primary px-5 py-2"
            onClick={() => handleAddToCart(data)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
