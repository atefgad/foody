import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import error404Img from "../../Assets/images/404.svg";

const animations = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

function Page404() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <div
        className="container d-flex flex-column justify-content-center pt-5 mb-6"
        style={{ flex: "1 0 auto" }}
      >
        <div className="pt-7 pb-5">
          <div className="text-center mb-2 pb-4">
            <h1 className="mb-5">
              <img
                className="d-inline-block"
                src={error404Img}
                alt="Error 404"
              />
              <span className="visually-hidden">Error 404</span>
            </h1>
            <h3 className="pb-2 text-dark">Uh-oh, something went wrong here</h3>
            <p className="pb-2 text-muted">
              It seems we can’t find the page you are looking for.
            </p>
            <Link
              className="btn btn-lg btn-primary fw-bold text-capitalize rounded-0 me-3"
              to="/"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page404;
