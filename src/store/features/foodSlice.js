import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addFood = createAsyncThunk("foods/addFood",
    async ({ updatedFoodData, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await api.addFood(updatedFoodData);
            toast.success("Food Added Successfully!");
            // navigate("/foods");
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getFoods = createAsyncThunk("foods/getFoods",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getFoods();
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getFoodsByUser = createAsyncThunk("foods/getFoodsByUser",
    async (userEmail, { rejectWithValue }) => {
        try {
            const response = await api.getFoodsByUser(userEmail);
            console.log(response);
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
        [getFoods.pending]: (state, action) => {
            state.loading = true;
        },
        [getFoods.fulfilled]: (state, action) => {
            state.loading = false;
            state.foods = action.payload;
        },
        [getFoods.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getFoodsByUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getFoodsByUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.userFoods = action.payload;
        },
        [getFoodsByUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});


export default foodSlice;