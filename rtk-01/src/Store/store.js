import {counterReducer} from "../features/Counter.Slice.js";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        counter: counterReducer,
    },

});
export default store;