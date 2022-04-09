import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";
import cart, { cartTotalPrice } from "./cartSlice";
import orders from "./ordersSlice";
import auth from "./authSlice";
import modal from "./modalSlice";

const store = configureStore({
  reducer: {
    products,
    cart,
    orders,
    auth,
    modal,
  },
});

store.dispatch(cartTotalPrice());
export default store;
