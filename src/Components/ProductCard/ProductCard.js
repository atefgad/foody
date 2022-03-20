import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

import { CountryBurger } from "../../constants/images";

function ProductCard({ data }) {
  const { id, title, description, image, price, newPrice } = data;
  const [value, setValue] = useState("m");
  const handleChange = (val) => setValue(val);
  return (
    <div className="col-md-4">
      <div className="card card-shadow p-3 mb-4 text-center border-0">
        <div className="product__img">
          <img
            src={`https://api.atef-gad.com/products${image}`}
            alt={title}
            width="150"
            height="150"
          />
        </div>
        <div className="text-center">
          <h5 className="h5">{title}</h5>
          {newPrice !== null ? (
            <React.Fragment>
              <del className="fs-6 me-2">${newPrice}</del>
              <span className="fs-6 fw-bold">${price}</span>
            </React.Fragment>
          ) : (
            <span className="fs-6 fw-bold">${price}</span>
          )}
        </div>

        <div className="mt-3 d-flex align-items-center justify-content-between">
          {/*  
        <ToggleButtonGroup
            type="radio"
            name="size"
            size="sm"
            value={value}
            onChange={handleChange}
          >
            <ToggleButton
              variant="secondary text-muted py-2 px-3"
              id={`s-${id}`}
              value="s"
            >
              S
            </ToggleButton>
            <ToggleButton
              variant="secondary text-muted py-2 px-3 border-start"
              id={`m-${id}`}
              value="m"
            >
              M
            </ToggleButton>
            <ToggleButton
              variant="secondary text-muted py-2 px-3 border-start"
              id={`l-${id}`}
              value="l"
            >
              L
            </ToggleButton>
          </ToggleButtonGroup>
          */}

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
              checked={value !== "s" ? "true" : "false"}
              onChange={(e) => handleChange(e.target.value)}
            />
            <label
              class="btn btn-secondary text-muted py-2 px-3"
              for={`s-${id}`}
            >
              S
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id={`m-${id}`}
              value="m"
              checked={value === "m" ? "true" : "false"}
              onChange={(e) => handleChange(e.target.value)}
            />
            <label
              class="btn btn-secondary text-muted py-2 px-3 border-start"
              for={`m-${id}`}
            >
              M
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id={`l-${id}`}
              value="l"
              checked={value === "l" ? "true" : "false"}
              onChange={(e) => handleChange(e.target.value)}
            />
            <label
              class="btn btn-secondary text-muted py-2 px-3 border-start"
              for={`l-${id}`}
            >
              L
            </label>
          </div>
          <button className="btn btn-outline-primary px-5 py-2">Add</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
