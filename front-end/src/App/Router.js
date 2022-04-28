import React from "react";
// import route components
import { Routes, Route } from "react-router-dom";

// import Pages Components
import { Auth, Menu, Page404, Category } from "../Pages";

function Router({ location }) {
  return (
    <React.Fragment>
      <Routes key={location.pathname} location={location}>
        <Route path="menu" element={<Menu />}>
          <Route path=":menu" element={<Category />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default Router;
