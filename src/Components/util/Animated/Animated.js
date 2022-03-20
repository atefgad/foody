import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const animations = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ...transition },
  },
  exit: { opacity: 0 },
};

function Animated({ children }) {
  // const { srcollYProgress } = useViewportScroll();
  // const opacity = useTransform(srcollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="animated"
    >
      {children}
    </motion.div>
  );
}

export default Animated;
