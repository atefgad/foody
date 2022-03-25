import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Animated, ProductCard } from "../../Components";

function Home() {
  const { products, search, searchErrMsg } = useSelector(
    (state) => state.products
  );

  const data = search.length > 0 ? search : products;
  return (
    <Animated>
      <div className="home__page">
        <div className="container">
          <div className="row">
            {data.map((productItem, i) => (
              <motion.div
                className="col-lg-4 col-md-6 col-sm-12"
                key={productItem.id}
                initial={{
                  opacity: 0,
                  translateX: i % 2 === 0 ? -50 : 50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.4, delay: i * 0.3 }}
              >
                <ProductCard data={productItem} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Animated>
  );
}

export default Home;
