import { createAsyncThunk } from "@reduxjs/toolkit";
import {CITY_TO_COORDINATE_URL, GET_FIVE_DAYS_WEATHER_URL, GET_WEATHER_URL} from "../../../api/url/url";

interface WeatherData {
    temperature: number;
    description: string;
}

interface FiveDaysForecast {
    day: string;
    temperature: number;
}

export const fetchGetWeather = createAsyncThunk<
    { current: WeatherData; fiveDays: FiveDaysForecast[] },
    string,
    { rejectValue: string }
>("getWeather/fetchGetWeather", async (inputValue, { rejectWithValue }) => {
    try {
        const coordinateResult = await fetch(CITY_TO_COORDINATE_URL(inputValue));
        if (!coordinateResult.ok) throw new Error("Failed to fetch coordinates");

        const coordinateJson = await coordinateResult.json();
        const coordinates = coordinateJson.map((item: any) => ({
            lat: item.lat,
            lon: item.lon,
        }));

        if (coordinates.length === 0) {
            throw new Error("No coordinates found for the city");
        }

        const currentResponse = await fetch(GET_WEATHER_URL(coordinates[0].lat, coordinates[0].lon));
        if (!currentResponse.ok) throw new Error("Failed to fetch current weather");
        const currentJson = await currentResponse.json();

        const fiveDaysResponse = await fetch(GET_FIVE_DAYS_WEATHER_URL(coordinates[0].lat, coordinates[0].lon));
        if (!fiveDaysResponse.ok) throw new Error("Failed to fetch 5-day weather");
        const fiveDaysJson = await fiveDaysResponse.json();

        return {
            current: currentJson,
            fiveDays: fiveDaysJson,
        };
    } catch (error: any) {
        return rejectWithValue(error.message || "An unknown error occurred");
    }
});
