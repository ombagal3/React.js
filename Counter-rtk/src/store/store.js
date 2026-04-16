import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../slices/counter_slice.js'


const store = configureStore({
    reducer:{
        counter: counterReducer

    }
});

export default store;