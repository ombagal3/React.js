import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      // Check email already exists
      const res = await api.get(`/users?email=${userData.email}`);

      if (res.data.length > 0) {
        return thunkAPI.rejectWithValue("Email already exists");
      }

      const response = await api.post("/users", {
        ...userData,
        role: "user",
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await api.get("/users");

      const user = response.data.find(
        (item) =>
          item.email.trim().toLowerCase() ===
            userData.email.trim().toLowerCase() &&
          item.password.trim() === userData.password.trim()
      );

      if (!user) {
        return thunkAPI.rejectWithValue("Invalid Email or Password");
      }

      localStorage.setItem("user", JSON.stringify(user));

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: "",
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder

      // Register

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;