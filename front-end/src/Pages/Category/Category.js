import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Api from "../../api";

import { Animated, ProductCard } from "../../Components";

function Category() {
  const { products } = useSelector((state) => state.products);
  const { category } = useParams();

  return (
    <Animated>
      <div className="container">
        <div className="row">
          {Api.getProductsByCat(category, products).map((productItem) => (
            <ProductCard data={productItem} />
          ))}
        </div>
      </div>
    </Animated>
  );
}

export default Category;
