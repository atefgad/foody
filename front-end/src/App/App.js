import React, { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

// import route components
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Header,
  Sidebar,
  CartWidget,
  Loading,
  ScrollToTop,
  PageHeading,
  CatsSlides,
  Modal,
} from "../Components";
import Router from "./Router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productsSlice";
import { Auth, Home, Page404 } from "../Pages";

function App() {
  const { isLoading } = useSelector((state) => state.products);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  let navigate = useNavigate();

  const dispach = useDispatch();

  useEffect(() => {
    dispach(getProducts());
  }, [dispach]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="App__Wrapper">
          <AnimatePresence exitBeforeEnter initial={false}>
            <ScrollToTop>
              <Routes>
                <Route
                  path="/*"
                  element={
                    isLoggedIn ? (
                      <Home isLoggedIn={isLoggedIn} />
                    ) : (
                      <Auth isLoggedIn={isLoggedIn} />
                    )
                  }
                />
                <Route
                  path="/auth"
                  element={<Auth isLoggedIn={isLoggedIn} />}
                />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </ScrollToTop>
          </AnimatePresence>

          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Main Modal */}
          <Modal />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
