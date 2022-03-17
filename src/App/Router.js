import React from "react";
// import route components
import { Routes, Route, useLocation } from "react-router-dom";

// import Pages Components
import { Home, Shop, Page404 } from "../Pages";

function Router() {
  const location = useLocation();

  return (
    <div>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Router;
