import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = process.env.WEATHER_API_KEY;
const CITY = 'San Angelo'
const ROOT_URL = ''

export const getCityCoords = createAsyncThunk('cities/getCityCoords', async () => {
  const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${CITY}&limit=1&appid=${API_KEY}`);
  return response.data;
}); 

export const cityWeatherSlice = createSlice({
	name: 'cityWeather', // The name to reference when accessing the slice.
	initialState: { // The slice starts empty when the app initially loads.
    cities: [],
  },
	reducers: {}, // Reducers is where the action functions are made.
  extraReducers: (builder) => {
    
  }
});

export default cityWeatherSlice.reducer;