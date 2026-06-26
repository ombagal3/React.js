import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",

  async () => {
    const res = await api.get("/orders");
    return res.data;
  }
);

export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",

  async ({ id, status }) => {
    const res = await api.patch(`/orders/${id}`, {
      status,
    });

    return res.data;
  }
);

const orderSlice = createSlice({
  name: "orders",

  initialState: {
    orders: [],
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })

      .addCase(
        updateOrderStatus.fulfilled,
        (state, action) => {
          const index = state.orders.findIndex(
            (item) => item.id === action.payload.id
          );

          state.orders[index] = action.payload;
        }
      );
  },
});

export default orderSlice.reducer;