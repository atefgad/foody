import React from "react";
import { useSelector } from "react-redux";

import { Animated, Bannar } from "../../Components";

function Home() {
  // const { products } = useSelector((state) => state.products);

  // const getProductsByRating = products.filter(
  //   (product) => product.rating.rate > 4
  // );
  // const getProductsByCategory = products.filter(
  //   (product) => product.category === "electronics"
  // );

  return (
    <Animated>
      <main className="page__content">
        {/*
        <section className="container pt-5 mt-2 mb-6 mt-md-0 pt-md-6">
          <SectionHead title="Trending products" />
          <ProductsSlides products={getProductsByRating} />
        </section>

  */}
      </main>
    </Animated>
  );
}

export default Home;
