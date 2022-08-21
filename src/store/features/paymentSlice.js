import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getDataForSSL = createAsyncThunk("payment/getDataForSSL",
    async ({ updatedPaymentData }, { rejectWithValue }) => {
        try {
            const response = await api.getDataForSSL(updatedPaymentData);

            if (response?.data) {
                window.location.replace(response?.data)
            }
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        payment: {},
        error: "",
        loading: false,
    },
    extraReducers: {
        [getDataForSSL.pending]: (state, action) => {
            state.loading = true;
        },
        [getDataForSSL.fulfilled]: (state, action) => {
            state.loading = false;
            state.payment = action.payload;
        },
        [getDataForSSL.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});


export default paymentSlice;