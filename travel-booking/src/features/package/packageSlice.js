import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Get Packages
export const fetchPackages = createAsyncThunk(
  "packages/fetchPackages",
  async () => {
    const response = await api.get("/packages");
    return response.data;
  }
);

// Add Package
export const addPackage = createAsyncThunk(
  "packages/addPackage",
  async (packageData) => {
    const response = await api.post("/packages", packageData);
    return response.data;
  }
);

// Delete Package
export const deletePackage = createAsyncThunk(
  "packages/deletePackage",
  async (id) => {
    await api.delete(`/packages/${id}`);
    return id;
  }
);

// Update Package
export const updatePackage = createAsyncThunk(
  "packages/updatePackage",
  async (packageData) => {
    const response = await api.put(
      `/packages/${packageData.id}`,
      packageData
    );

    return response.data;
  }
);

const packageSlice = createSlice({
  name: "packages",

  initialState: {
    packages: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchPackages.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.packages = action.payload;
      })

      .addCase(addPackage.fulfilled, (state, action) => {
        state.packages.push(action.payload);
      })

      .addCase(deletePackage.fulfilled, (state, action) => {
        state.packages = state.packages.filter(
          (item) => item.id !== action.payload
        );
      })

      .addCase(updatePackage.fulfilled, (state, action) => {
        state.packages = state.packages.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      });
  },
});

export default packageSlice.reducer;