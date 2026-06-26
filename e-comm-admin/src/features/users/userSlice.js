import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",

  async () => {
    const res = await api.get("/users");
    return res.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",

  async (id) => {
    await api.delete(`/users/${id}`);
    return id;
  }
);

export const blockUser = createAsyncThunk(
  "users/blockUser",

  async ({ id, blocked }) => {
    const res = await api.patch(`/users/${id}`, {
      blocked,
    });

    return res.data;
  }
);

const userSlice = createSlice({
  name: "users",

  initialState: {
    users: [],
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (item) => item.id !== action.payload
        );
      })

      .addCase(blockUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (item) => item.id === action.payload.id
        );

        state.users[index] = action.payload;
      });
  },
});

export default userSlice.reducer;