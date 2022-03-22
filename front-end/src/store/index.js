import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";
import cart, { cartTotalPrice } from "./cartSlice";
import auth from "./authSlice";
import modal from "./modalSlice";

const store = configureStore({
  reducer: {
    products,
    cart,
    auth,
    modal,
  },
});

// store.dispatch(cartTotalPrice());
// store.dispatch(getUsers());
export default store;
