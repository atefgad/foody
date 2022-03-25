import { createSlice } from "@reduxjs/toolkit";

// Get cartItems from the localStorage
const cartItems = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cartItems: cartItems ? cartItems : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the product is already exist in the cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const check = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (check) {
        const id = action.payload.id + "-" + action.payload.size;
        const sizeCheck = state.cartItems.find(
          (item) => item.id === id && item.size === action.payload.size
        );
        // state.cartItems[itemIndex].quantity += 1;
        // (action.payload.size !== state.cartItems[itemIndex].size)
        if (!sizeCheck) {
          const productData = {
            ...action.payload,
            id: action.payload.id + "-" + action.payload.size,
            size: action.payload.size,
            quantity: parseInt(action.payload.quantity) || 1,
          };
          state.cartItems.push(productData);
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
        } else {
          alert("This product is already in the cart!");
          return;
        }
      } else {
        const productData = {
          ...action.payload,
          quantity: parseInt(action.payload.quantity) || 1,
        };
        state.cartItems.push(productData);
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      // setLocalStorage("cartItems", state.cartItems);
    },
    // removeCartItem
    removeCartItem: (state, action) => {
      const cartItemsFiltered = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = cartItemsFiltered;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // increaseCart
    increaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    // decreaseCart
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    // cartTotalPrice
    cartTotalPrice: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  increaseCart,
  decreaseCart,
  removeCartItem,
  cartTotalPrice,
} = cartSlice.actions;
