import React, { useState } from "react";

// import route components
import { Route, Routes, useLocation } from "react-router-dom";

import {
  Header,
  Sidebar,
  CartWidget,
  PageHeading,
  CatsSlides,
} from "../Components";
import { Category, Menu, Settings } from "../Pages";

function AppContainer() {
  const [toggle, setToggle] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  // <Route path="product/:productId" element={<Product />} />

  return (
    <React.Fragment>
      {/* Main Modal */}
      <Sidebar toggle={toggle} closeSidebar={setToggle} />
      <Header
        toggle={toggle}
        setToggle={setToggle}
        setShowCart={setShowCart}
        showCart={showCart}
      />
      <main className={`main-area ${toggle && "show"}`}>
        <div className="content">
          <PageHeading>
            <CatsSlides />
          </PageHeading>

          {/* page__content */}
          <div className="page__content bg-secondary ">
            <Routes key={location.pathname} location={location}>
              <Route path="menu" element={<Menu />} />
              <Route path="menu/:category" element={<Category />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
        <CartWidget showCart={showCart} />
      </main>
    </React.Fragment>
  );
}

export default AppContainer;
