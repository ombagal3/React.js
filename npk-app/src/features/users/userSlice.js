import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3001/users";

const initialState = {
  users: [],
  search: "",
  filterRole: "All",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (user) => {
    const response = await axios.post(API, user);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    await axios.delete(`${API}/${id}`);
    return id;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user) => {
    const response = await axios.put(`${API}/${user.id}`, user);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setFilterRole: (state, action) => {
      state.filterRole = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user.id === action.payload.id
            ? action.payload
            : user
        );
      });
  },
});

export const { setSearch, setFilterRole } = userSlice.actions;
export default userSlice.reducer;