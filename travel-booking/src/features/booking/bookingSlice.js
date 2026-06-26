import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Get Bookings
export const fetchBookings = createAsyncThunk(
  "booking/fetchBookings",
  async () => {
    const response = await api.get("/bookings");
    return response.data;
  }
);

// Add Booking
export const addBooking = createAsyncThunk(
  "booking/addBooking",
  async (bookingData) => {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  }
);

// Cancel Booking
export const cancelBooking = createAsyncThunk(
  "booking/cancelBooking",
  async (id) => {
    await api.delete(`/bookings/${id}`);
    return id;
  }
);




export const approveBooking = createAsyncThunk(
  "booking/approveBooking",
  async (booking) => {
    const response = await api.put(`/bookings/${booking.id}`, {
      ...booking,
      status: "Approved",
    });

    return response.data;
  }
);

export const rejectBooking = createAsyncThunk(
  "booking/rejectBooking",
  async (booking) => {
    const response = await api.put(`/bookings/${booking.id}`, {
      ...booking,
      status: "Rejected",
    });

    return response.data;
  }
);

const bookingSlice = createSlice({
  name: "booking",

  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })

      .addCase(addBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
      })

      .addCase(cancelBooking.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(
          (item) => item.id !== action.payload
        );
      })

      .addCase(approveBooking.fulfilled,(state,action)=>{
        state.bookings=state.bookings.map(item=>
        item.id===action.payload.id?action.payload:item
        );
    })

    .addCase(rejectBooking.fulfilled,(state,action)=>{
        state.bookings=state.bookings.map(item=>
        item.id===action.payload.id?action.payload:item
        );
    });

      

  },
});



export default bookingSlice.reducer;