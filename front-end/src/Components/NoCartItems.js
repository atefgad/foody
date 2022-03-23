import React from "react";
import { Link } from "react-router-dom";
import { Empty } from "../constants/images";

function NoCartItems() {
  return (
    <div className="pb-5 p-3 text-center  h-100 d-flex flex-column align-items-center justify-content-between">
      <div className="mt-md-5 mb-4 mt-sm-3">
        <img src={Empty} alt="Empty" width="140" />
      </div>
      <h5 className="text-dark">there are no orders yet!</h5>
      <span className="text-muted">Start Adding orders!</span>
      <Link to="/" className="btn btn-primary btn-lg rounded-pill mt-4">
        Add Now!
      </Link>
    </div>
  );
}

export default NoCartItems;
