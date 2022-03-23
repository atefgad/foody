import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Api from "../../api";

import { motion } from "framer-motion";
import { Animated, ProductCard } from "../../Components";

function Category() {
  const { products } = useSelector((state) => state.products);
  const { category } = useParams();

  return (
    <Animated>
      <div className="container">
        <div className="row">
          {Api.getProductsByCat(category, products).map((productItem, i) => (
            <motion.div
              className="col-md-4"
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
