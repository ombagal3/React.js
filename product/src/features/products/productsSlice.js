import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import API from "../../services/api";

const initialState = {
  products: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await API.get("/products");
    return res.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const res = await API.post("/products", product);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await API.delete(`/products/${id}`);
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const res = await API.put(
      `/products/${product.id}`,
      product
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (item) => item.id === action.payload.id
        );

        state.products[index] = action.payload;
      });
  },
});

export default productSlice.reducer;