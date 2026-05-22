import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const res = await API.get(
      `/users?email=${email}&password=${password}`
    );

    if (res.data.length > 0) {
      localStorage.setItem("user", JSON.stringify(res.data[0]));
      return res.data[0];
    } else {
      throw new Error("Invalid Credentials");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;