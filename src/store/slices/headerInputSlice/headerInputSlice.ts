import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "Yerevan";

export const headerInputSlice = createSlice({
    name: "homePageInputValue",
    initialState,
    reducers: {
        setInputValue(_, action: PayloadAction<string>) {
            return action.payload.toString();
        },
    },
});

export const { setInputValue } = headerInputSlice.actions;

export const headerInputReducer = headerInputSlice.reducer;