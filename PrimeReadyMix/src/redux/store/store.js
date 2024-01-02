import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/baseApi";
import metadataSliceReducer from "../slice/metadataSlice/metadataSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        metadataSlice: metadataSliceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
