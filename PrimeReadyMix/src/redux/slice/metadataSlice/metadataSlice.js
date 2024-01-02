import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const metadataSlice = createSlice({
    name: "metadata",
    initialState,
    reducers: {},
});

export default metadataSlice.reducer;
