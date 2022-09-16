import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchPost", async () => {
    const data = await axios.get('tabledata.json');
    return data.data; 
})

const dataSlice = createSlice({
    name: "data",
    initialState: {
        isLoading: false,
        error: null,
        userinfo: [],
    },

    extraReducers: builder => {

        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userinfo = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.userinfo = [];
            state.error = action.payload;
        });
    }
})

export default dataSlice.reducer;