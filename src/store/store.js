import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import authSlice from "./authentication/userSlice";
import foodSlice from "./features/foodSlice";
import paymentSlice from "./features/paymentSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
        auth: authSlice.reducer,
        food: foodSlice.reducer,
        payment: paymentSlice.reducer,
    }
})

export default store;