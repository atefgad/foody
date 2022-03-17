import React from "react";
import { Link } from "react-router-dom";
import "./PageHeading.scss";

function PageHeading({ name = "page Heading", link, children }) {
  return (
    <div className="page__heading bg-white ">
      <div className="d-flex align-center-center justify-content-between p-3">
        <h5 className="text">{name}</h5>
        {link ? (
          <Link to={link} className="btn btn-link text-gray-700 p-0">
            view all
          </Link>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default PageHeading;
