import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Page404 } from "../../Pages";

import { addToCart } from "../../store/cartSlice";

function ProductCard({ data }) {
  const { id, title, image, price, newPrice } = data;
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);

  const [size, setSize] = useState("m");
  const [qty, setQty] = useState(1);

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  // handleAddToCart
  const handleAddToCart = (productData) => {
    const addData = {
      ...productData,
      // quantity: qty,
      size,
      price: newPrice !== null ? newPrice : price,
    };
    dispatch(addToCart(addData));
    // setTimeout(() => {}, 3000);
  };

  // check if isnt exist product show Error Page404
  if (!data) return <Page404 />;
  return (
    <div className="col-md-4">
      <div className="card card-shadow p-3 mb-4 text-center border-0">
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
              <del className="fs-6 me-2">${newPrice}</del>
              <span className="fs-6 fw-bold">${price}</span>
            </React.Fragment>
          ) : (
            <span className="fs-6 fw-bold">${price}</span>
          )}
        </div>
        {/* Size[radio box] */}
        <div className="mt-3 d-flex align-items-center justify-content-between">
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id={`s-${id}`}
              value="s"
              checked={size === "s"}
              onChange={handleChange}
            />
            <label
              class="btn btn-secondary text-muted py-2 px-3"
              htmlFor={`s-${id}`}
            >
              S
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id={`m-${id}`}
              value="m"
              checked={size === "m"}
              onChange={handleChange}
            />
            <label
              class="btn btn-secondary text-muted py-2 px-3 border-start"
              htmlFor={`m-${id}`}
            >
              M
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id={`l-${id}`}
              value="l"
              checked={size === "l"}
              onChange={handleChange}
            />
            <label
              class="btn btn-secondary text-muted py-2 px-3 border-start"
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
