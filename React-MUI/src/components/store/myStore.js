import { configureStore } from "@reduxjs/toolkit";
import globalSliceReducer from '../Slice/globalSlice'
import selectedSliceReducer from '../Slice/selectedSlice'

export const myStore = configureStore({
    reducer:{
        globalSlice:globalSliceReducer,
        selectedSlice:selectedSliceReducer
    },
})