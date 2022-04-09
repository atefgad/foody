import { createSlice } from "@reduxjs/toolkit";

// Get orders from the localStorage
const orders = JSON.parse(localStorage.getItem("orders"));

const initialState = {
  orders: orders ? orders : [],
};

var orderNumber = function () {
  return "#" + Math.random().toString(36).substr(2, 9);
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addNewOrder: (state, action) => {
      const { payload } = action;
      if (payload !== undefined) {
        const productData = {
          orderNumber: orderNumber(),
          ...payload,
          // size: payload.size,
          // quantity: parseInt(payload.quantity) || 1,
        };
        state.orders.push(productData);
        localStorage.setItem("orders", JSON.stringify(state.orders));
      }
    },
    // removeOrderItem
    removeOrder: (state, action) => {
      const ordersFiltered = state.orders.filter(
        (item) => item.id !== action.payload.id
      );

      state.orders = ordersFiltered;
      localStorage.setItem("cart", JSON.stringify(state.orders));
    },
  },
});

export default ordersSlice.reducer;
export const { addNewOrder, removeCartItem } = ordersSlice.actions;
