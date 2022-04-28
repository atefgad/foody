import React from "react";

function SizeCheckInput({ id, sizeItem, size, setSize, isError }) {
  return (
    <div className="product__size">
      <input
        type="radio"
        className="btn-size-check"
        id={`#${sizeItem}-${id}`}
        name="size"
        value={sizeItem}
        checked={size === sizeItem}
        onChange={(e) => setSize(e.target.value)}
      />
      <label
        className={`btn btn-secondary text-muted py-2 px-2 ${
          isError && " border-3 border-primary"
        }`}
        htmlFor={`#${sizeItem}-${id}`}
        tooltip={
          sizeItem === "m" ? "+ $3" : "" || sizeItem === "l" ? "+ $5" : ""
        }
      >
        {sizeItem.toUpperCase()}
      </label>
    </div>
  );
}

export default SizeCheckInput;
