import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Countries} from "../../../types/types.ts";

interface CountriesState {
    countries: Countries[],
    initialCountries: Countries[],
    selectedCountry: Countries | null,
}

const initialState: CountriesState = {
    countries: [],
    initialCountries: [],
    selectedCountry: null,
};

export const countriesSlice = createSlice<CountriesState>({
    name: "countries",
    initialState,
    reducers: {
        setCountries(state, action: PayloadAction<Countries[]>) {
            state.countries =  action.payload;
        },
        setInitialCountries(state, action: PayloadAction<Countries[]>) {
            state.initialCountries =  action.payload;
        },
        setSelectedCountry(state, action: PayloadAction<Countries>) {
            state.selectedCountry = action.payload;
        }
    },
});

export const { setCountries, setSelectedCountry, setInitialCountries } = countriesSlice.actions;

export const countriesReducer = countriesSlice.reducer;