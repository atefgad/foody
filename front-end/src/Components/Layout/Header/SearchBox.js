import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { IoSearchOutline } from "react-icons/io5";
import { search } from "../../../store/productsSlice";

function SearchBox({ className }) {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setTerm(e.target.value);
    console.log(e.target.value);
    if (term !== "") {
      dispatch(search(term));
    }
  };
  return (
    <div className={className ? className : null}>
      <div className="d-flex align-items-center">
        <input
          className="form-control  navbar-search-field p-1"
          type="text"
          placeholder="What are you looking for?"
          value={term}
          onChange={(e) => handleSearch(e)}
        />
        <button className="btn btn-second" onClick={handleSearch}>
          <IoSearchOutline className="fw-bold fs-4" />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
