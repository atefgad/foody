import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import API_URL from "../data/products.json";
// const API_URL = "http://localhost:3005/products";
const API_URL =
  "https://my-json-server.typicode.com/atefgad/json-server/products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  products: [],
  search: [],
  error: null,
  isLoading: false,
};
// products [actions - reducers]
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    search: (state, action) => {
      const searchTerm = action.payload;

      if (searchTerm !== "") {
        state.search = searchTerm;
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // getProduct
    // [getProduct.pending]: () => {

    // }
  },
});

export default productSlice.reducer;
export const { search } = productSlice.actions;
