import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modalSlice";
import "./Styles.scss";

function AddNewItem() {
  const dispatch = useDispatch();
  return (
    <div className="add_new_item">
      <div className="modal__title py-3 mb-4 w-100  border-bottom d-flex">
        <IoFastFoodOutline className="me-2 fs-4 fw-bold text-primary" />
        <h5 className="text-dark">add new menu item</h5>
      </div>
      <form className="container pt-5">
        <input type="text" className="form-control mb-2" placeholder="title" />
        <input type="text" className="form-control mb-2" placeholder="title" />
        <input type="text" className="form-control mb-2" placeholder="title" />
        <div className="d-flex align-items-center justify-content-center mt-4 border-top pt-3">
          <button
            type="submit"
            className="btn btn-primary btn-lg rounded-pill w-100 fw-bold"
          >
            add item
          </button>

          <button
            type="button"
            className="btn btn-link text-dark w-100 fw-bold"
            onClick={() => dispatch(closeModal())}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItem;
