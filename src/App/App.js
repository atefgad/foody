import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Header,
  Sidebar,
  CartWidget,
  Loading,
  ScrollToTop,
  Modal,
  PageHeading,
  Animated,
} from "../Components";

import "./App.scss";
import Router from "./Router";

function App() {
  const [toggle, setToggle] = useState(false);
  // const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.products);
  // const { isLoggedIn } = useSelector((state) => state.auth);

  const isLoading = false;

  // <Route path="product/:productId" element={<Product />} />

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <AnimatePresence exitBeforeEnter initial={true}>
          <ScrollToTop>
            <div className="app__container bg-secondary">
              <Sidebar toggle={toggle} />
              <main className={`main-area ${toggle ? "show" : ""}`}>
                <Header setToggle={setToggle} toggle={toggle} />
                <div className="content">
                  <PageHeading name="category" link="/shop">
                    <h2 className="p5">PiZZa</h2>
                  </PageHeading>
                  <div className="page__content bg-secondary ">
                    <Animated>
                      <Router />
                    </Animated>
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
