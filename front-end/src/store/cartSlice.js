import { createSlice } from "@reduxjs/toolkit";

// Get cartItems from the localStorage
const cartItems = JSON.parse(localStorage.getItem("cartItems"));

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
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      const check = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      console.log("itemIndex", itemIndex);

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
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // setLocalStorage("cartItems", state.cartItems);
    },
    // removeCartItem
    removeCartItem: (state, action) => {
      const cartItemsFiltered = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = cartItemsFiltered;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
        localStorage.setItem("cartItems", JSON.stringify(cartItemsFiltered));
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
