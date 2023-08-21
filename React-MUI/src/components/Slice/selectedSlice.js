import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userApi } from "../userApi"

export const selectStore = createAsyncThunk(
    'selectedSlice/selectStore',
    async (Id) => {
        if(Id === null){
            throw new Error('Nothing is Selected !');
        }
        const response = await fetch(`${userApi}/${Id}`);
            const data = await response.json();
            return data;
    }
)

export const selectedSlice = createSlice({
    name:'selectedSlice',
    initialState: {
        value: '',
        status: null,
    },
    reducers:{
    },
    extraReducers : (builder) => {
        builder.addCase(selectStore.fulfilled,(state,action) => {
            state.value = action.payload;
            state.status = "Fulfilled"
        })
        builder.addCase(selectStore.rejected,(state,action) => {
            state.status = action.error.message
        })
        builder.addCase(selectStore.pending,(state,action) => {
            state.status = "Pending"
        })
    },
})

export default selectedSlice.reducer;
