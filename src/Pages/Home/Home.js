import React from "react";
import { useSelector } from "react-redux";
import { Animated, ProductCard } from "../../Components";

function Home() {
  const { products } = useSelector((state) => state.products);

  return (
    <Animated>
      <div className="home__page">
        <div className="container">
          <div className="row">
            {products
              .filter((product) => product.category === "pizza")
              .map((productItem) => (
                <ProductCard data={productItem} />
              ))}
          </div>
        </div>
      </div>
    </Animated>
  );
}

export default Home;
