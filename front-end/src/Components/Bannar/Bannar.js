import React from "react";
import { Link } from "react-router-dom";

import "./Bannar.scss";

import { delivery } from "../../constants/images";
import { IoCall } from "react-icons/io5";

function Bannar() {
  return (
    <div className="bannar">
      <div className="container">
        <div className="bannar__card bg-second rounded-3 text-center">
          <img className="bannar__card__img " src={delivery} alt="delivery" />
          <button
            type="button"
            className="btn btn-lg btn-primary fw-bold rounded"
          >
            <IoCall className="fs-3 me-1" />
            61082
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bannar;
