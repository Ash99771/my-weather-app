import {configureStore} from "@reduxjs/toolkit";
import {headerInputReducer} from "./slices/headerInputSlice/headerInputSlice.ts";
import {getWeatherReducer} from "./slices/getWeatherSlice/getWeatherSlice.ts";
import {countriesReducer} from "./slices/countriesSlice/countriesSlice.ts";

export const store = configureStore({
    reducer: {
        headerInputValue: headerInputReducer,
        weather: getWeatherReducer,
        countries: countriesReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
