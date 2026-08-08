import {configureStore} from '@reduxjs/toolkit'
import BookReducer from '../features/bookSlice.js'

const store = configureStore({
    reducer:{
        books:BookReducer,
    },
})
export default store;