const WEATHER_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CITY_TO_COORDINATE_URL = (cityName: string): string => {
    return `${BASE_URL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${WEATHER_API_KEY}`
}

export const GET_WEATHER_URL = (lat: number, lon: number): string => {
    return `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
}

export const GET_FIVE_DAYS_WEATHER_URL = (lat: number, lon: number): string => {
    return `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
}