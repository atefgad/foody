import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";

import "./ProductCard.scss";

import { Page404 } from "../../Pages";

import { addToCart } from "../../store/cartSlice";
import Api from "../../api";
import SizeCheckInput from "./SizeCheckInput";
import { IoAddCircle } from "react-icons/io5";

function ProductCard({ data }) {
  const { id, title, image, price, newPrice } = data;
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);

  const [size, setSize] = useState("");
  const [isError, setIsError] = useState(false);

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
      setSize("");
      setIsError(false);
      // setTimeout(() => {}, 3000);
    } else {
      setIsError(true);
      // toast.error("Select a Size");
    }
  };

  // check if isnt exist product show Error Page404
  if (!data) return <Page404 />;
  return (
    <div className="product__card card card-shadow p-3 mb-4 text-center border-0">
      <div className="product__img">
        <img
          src={Api.imagesURL() + image}
          alt={title}
          width="100"
          height="100"
        />
      </div>
      <div className="text-center">
        <h5 className="h6">{title}</h5>
        <span className="fs-6 fw-bold">
          ${updatedPrice !== undefined ? updatedPrice.toFixed(2) : price}
        </span>
      </div>
      <div className="mt-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <span className="me-1">Size: </span>
          {["s", "m", "l"].map((sizeItem, index) => (
            <SizeCheckInput
              key={`${id}"-"${index}`}
              id={id}
              sizeItem={sizeItem}
              size={size}
              setSize={setSize}
              isError={isError}
            />
          ))}
        </div>
        <button
          className="card__btn btn btn-link   p-0"
          onClick={() => handleAddToCart(data)}
          tooltip="Add"
        >
          <IoAddCircle className="card__btn__icon fw-bold" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
