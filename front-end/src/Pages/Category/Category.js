import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Api from "../../api";

import { motion } from "framer-motion";
import { Animated, ProductCard } from "../../Components";

function Category() {
  const { products, search } = useSelector((state) => state.products);
  const { category } = useParams();

  const data = search.length > 0 ? search : products;
  return (
    <Animated>
      <div className="container">
        <div className="row">
          {Api.getProductsByCat(category, data).map((productItem, i) => (
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
    </Animated>
  );
}

export default Category;
