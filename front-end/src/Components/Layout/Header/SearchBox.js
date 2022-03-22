import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchBox({ className }) {
  return (
    <div className={className ? className : null}>
      <div className="d-flex align-items-center">
        <input
          className="form-control  navbar-search-field p-1"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="btn btn-second">
          <IoSearchOutline className="fw-bold fs-4" />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
