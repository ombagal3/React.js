import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import packageReducer from "../features/package/packageSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({

    reducer: {

        auth: authReducer,

        packages: packageReducer,

        bookings: bookingReducer

    }

});