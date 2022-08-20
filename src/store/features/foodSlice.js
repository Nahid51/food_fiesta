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
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteFood = createAsyncThunk("foods/deleteFood",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await api.deleteFood(id);
            toast.success("Food Deleted Successfully!");
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateFood = createAsyncThunk("foods/updateFood",
    async ({ id, updatedFoodData, navigate, toast, }, { rejectWithValue }) => {
        try {
            const response = await api.updateFood(updatedFoodData, id);
            toast.success("Food Updated Successfully!");
            navigate("/foods");
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const reviewFood = createAsyncThunk("foods/reviewFood",
    async ({ id, reviewFoodData, navigate, toast, }, { rejectWithValue }) => {
        try {
            console.log(reviewFoodData);
            const response = await api.reviewFood(reviewFoodData, id);
            console.log(response);
            toast.success("Thank you for leaving a review!");
            navigate("/foods");
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getReviewsByFood = createAsyncThunk("foods/getReviewsByFood",
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.getReviewsByFood(id);
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
        foodReviews: [],
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
        [deleteFood.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteFood.fulfilled]: (state, action) => {
            state.loading = false;
            const { arg: { id } } = action.meta;
            if (id) {
                state.userFoods = state.userFoods.filter(item => item._id !== id);
                state.foods = state.foods.filter(item => item._id !== id);
            }
        },
        [deleteFood.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [updateFood.pending]: (state, action) => {
            state.loading = true;
        },
        [updateFood.fulfilled]: (state, action) => {
            state.loading = false;
            const { arg: { id } } = action.meta;
            if (id) {
                state.userFoods = state.userFoods.map(item => item._id === id ? action.payload : item);
                state.foods = state.foods.map(item => item._id === id ? action.payload : item);
            }
        },
        [updateFood.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getReviewsByFood.pending]: (state, action) => {
            state.loading = true;
        },
        [getReviewsByFood.fulfilled]: (state, action) => {
            state.loading = false;
            state.foodReviews = action.payload;
        },
        [getReviewsByFood.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});


export default foodSlice;