import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const apiKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

const initialState = {
    city: '',
    temperature: [],
    pressure: [],
    humidity: [],
    loading: false,
    error: null,
};

export const fetchWeatherAPI = createAsyncThunk(
    'weather/fetchWeatherAPI',
    async(city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city}&appid=${apiKEY}`
            );
            return response.data
        } catch (error) {
            throw error
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
				state.city = action.payload.city;
				state.temperature = action.payload.list.map(
					(item) => item.main.temp
				);
				state.pressure = action.payload.list.map(
					(item) => item.main.pressure
				);
				state.humidity = action.payload.list.map(
					(item) => item.main.humidity
				);
			})
			.addCase(fetchWeatherAPI.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message
                
			});
	},
});

export default weatherSlice.reducer;