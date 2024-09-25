import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "./apiSlice";

export const store = configureStore(
    {
    reducer:{
        [ApiSlice.reducerPath]: ApiSlice.reducer,
        // auth: authReducer,
    },

    middleware:(getDefaultMiddleware) => 
         getDefaultMiddleware().concat(ApiSlice.middleware),
}
)