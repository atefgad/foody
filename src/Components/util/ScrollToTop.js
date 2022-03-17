import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(Propse) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{Propse.children}</>;
}

export default ScrollToTop;
