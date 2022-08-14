import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addFood = createAsyncThunk("foods/addFood",
    async ({ updatedFoodData, navigate, toast }, { rejectWithValue }) => {
        try {
            console.log(updatedFoodData);
            const response = await api.addFood(updatedFoodData);
            toast.success("Food Added Successfully!");
            navigate("/foods");
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const foodSlice = createSlice({
    name: "food",
    initialState: {
        food: {},
        foods: [],
        userFoods: [],
        error: "",
        loading: false,
    },
    extraReducers: {
        [addFood.pending]: (state, action) => {
            state.loading = true;
        },
        [addFood.fulfilled]: (state, action) => {
            state.loading = false;
            state.foods = [action.payload];
        },
        [addFood.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        // [register.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [register.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        //     state.user = action.payload;
        // },
        // [register.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload.message;
        // },
        // [googleSignIn.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [googleSignIn.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        //     state.user = action.payload;
        // },
        // [googleSignIn.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload.message;
        // },
    },
});


export default foodSlice;