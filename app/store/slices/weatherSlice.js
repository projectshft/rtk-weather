import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const initialState = {
    cities: [], // Array to hold weather data for up to five cities
    loading: false,
    error: null,
};

export const fetchWeatherAPI = createAsyncThunk(
    'weather/fetchWeatherAPI',
    async (city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city}&appid=${apiKEY}`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeatherAPI.fulfilled, (state, action) => {
                state.loading = false;
                // Check if the city already exists in the state
                const existingCityIndex = state.cities.findIndex(
                    (cityData) => cityData.city.name === action.payload.city.name
                );
                if (existingCityIndex !== -1) {
                    // Replace weather data for the existing city
                    state.cities[existingCityIndex] = {
                        city: action.payload.city,
                        temperature: action.payload.list.map((item) => item.main.temp),
                        pressure: action.payload.list.map((item) => item.main.pressure),
                        humidity: action.payload.list.map((item) => item.main.humidity),
                    };
                } else {
                    // Add weather data for the new city
                    state.cities.push({
                        city: action.payload.city,
                        temperature: action.payload.list.map((item) => item.main.temp),
                        pressure: action.payload.list.map((item) => item.main.pressure),
                        humidity: action.payload.list.map((item) => item.main.humidity),
                    });
                }
                // Keep only the latest 5 cities
                if (state.cities.length > 5) {
                    state.cities.shift(); // Remove the oldest city
                }
            })
            .addCase(fetchWeatherAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;