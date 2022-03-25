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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productsSlice";

function App() {
  const { isLoading } = useSelector((state) => state.products);
  const [toggle, setToggle] = useState(false);
  const [showCart, setShowCart] = useState(false);
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
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div className="app__container bg-secondary">
              <Sidebar toggle={toggle} closeSidebar={setToggle} />
              <Header
                toggle={toggle}
                setToggle={setToggle}
                setShowCart={setShowCart}
                showCart={showCart}
              />
              <main className={`main-area ${toggle ? "show" : ""}`}>
                <div className="content">
                  <PageHeading name="category">
                    <CatsSlides />
                  </PageHeading>

                  {/* page__content */}
                  <div className="page__content bg-secondary ">
                    <Router location={location} />
                  </div>
                </div>
                <CartWidget showCart={showCart} />
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
