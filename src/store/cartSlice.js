import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
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
        state.cartItems[itemIndex].quantity =
          parseInt(action.payload.quantity) >= 1
            ? parseInt(action.payload.quantity)
            : state.cartItems[itemIndex].quantity + 1;

        // toast.info(
        //   `${action.payload.title.substr(0, 20)}... increased quantity`
        // );
      } else {
        const productData = {
          ...action.payload,
          quantity:
            parseInt(action.payload.quantity) > 0
              ? parseInt(action.payload.quantity)
              : 1,
        };
        state.cartItems.push(productData);
      }
      // localStorage.setItem("cart", JSON.stringify(state.cartItems));
      // setLocalStorage("cartItems", state.cartItems);
    },
    // removeCartItem
    removeCartItem: (state, action) => {
      const cartItemsFiltered = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = cartItemsFiltered;
      // setLocalStorage("cartItems", state.cartItems);
    },
    // increaseCart
    increaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    // decreaseCart
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const cartItemsFiltered = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = cartItemsFiltered;
        // setLocalStorage("cartItems", state.cartItems);
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
