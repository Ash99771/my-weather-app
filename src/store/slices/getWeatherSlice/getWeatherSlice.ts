import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetWeather } from "./getWeatherAPI.ts";

interface WeatherState {
    current: any;
    fiveDays: any;
    isLoading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    current: null,
    fiveDays: null,
    isLoading: false,
    error: null,
};

export const getWeatherSlice = createSlice<WeatherState>({
    name: "getWeather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetWeather.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                fetchGetWeather.fulfilled,
                (state, action: PayloadAction<{ current: any; fiveDays: any }>) => {
                    state.current = action.payload.current;
                    state.fiveDays = action.payload.fiveDays;
                    state.isLoading = false;
                }
            )
            .addCase(
                fetchGetWeather.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false;
                    state.error = action.payload || "Failed to fetch weather data";
                }
            );
    },
});

export const getWeatherReducer = getWeatherSlice.reducer;
