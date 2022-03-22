import React from "react";
// import route components
import { Routes, Route } from "react-router-dom";

// import Pages Components
import { Menu, Shop, Page404, Category } from "../Pages";

function Router({ location }) {
  return (
    <React.Fragment>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Menu />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default Router;
