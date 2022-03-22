import React, { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

// import route components
import { useLocation } from "react-router-dom";

import {
  Header,
  Sidebar,
  CartWidget,
  Loading,
  ScrollToTop,
  PageHeading,
  CatsSlides,
} from "../Components";
import Router from "./Router";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productsSlice";

function App() {
  const { isLoading } = useSelector((state) => state.products);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const dispach = useDispatch();

  useEffect(() => {
    dispach(getProducts());
  }, [dispach]);

  // <Route path="product/:productId" element={<Product />} />

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <AnimatePresence exitBeforeEnter initial={false}>
          <ScrollToTop>
            <div className="app__container bg-secondary">
              <Sidebar toggle={toggle} />
              <Header setToggle={setToggle} toggle={toggle} />
              <main className={`main-area ${toggle ? "show" : ""}`}>
                <div className="content">
                  <PageHeading name="category" link="/shop">
                    <CatsSlides />
                  </PageHeading>

                  {/* page__content */}
                  <div className="page__content bg-secondary ">
                    <Router location={location} />
                  </div>
                </div>
                <CartWidget />
              </main>

              {/* Main Modal
            
            <Modal />
            
            */}
            </div>
          </ScrollToTop>
        </AnimatePresence>
      )}
    </React.Fragment>
  );
}

export default App;
