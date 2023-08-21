import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userApi } from "../userApi"

const initialState = {
    value: '',
    status: null,
}

export const setStore = createAsyncThunk(
    'globalSlice/setStore',
    async () => {
        const response = await fetch(userApi+'/Ids');
        if(response.status === 500) throw new Error("Fetching Failed from the Server!");
        const data = await response.json(); 
        return data;
    }
)

export const globalSlice = createSlice({
    name:'globalSlice',
    initialState,
    reducers:{
    },
    extraReducers : (builder) => {
        builder.addCase(setStore.fulfilled,(state,action) => {
            state.value = action.payload;
            state.status = "Fulfilled"
        })
        builder.addCase(setStore.rejected,(state,action) => {
            state.status = action.error.message
        })
        builder.addCase(setStore.pending,(state,action) => {
            state.status = "Pending !"
        })
    },
})

export default globalSlice.reducer;
