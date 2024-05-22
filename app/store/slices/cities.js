import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Hard-coded key for demonstration purposes
//process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const API_KEY = '9d545ab1acd07f6fe196233174125a11'

export const fetchForecast = createAsyncThunk('cities/fetchForecast', async search => {
  // Get the coordinates of the city that has been searched
  const coordResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${API_KEY}`);
      
  const coordinates = {lat: coordResponse.data[0].lat, lon: coordResponse.data[0].lon};

  // Get the forecast for the coordinates of the searched city
  const forcastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`);

  return forcastResponse.data;
}); 

export const cityWeatherSlice = createSlice({
	name: 'cities', // The name to reference when accessing the slice.
	initialState: { // The slice starts empty when the app initially loads.
    cities: [], // Stores each searched city in an array
    status: 'idle',
    error: null,
  },
	reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities.splice(0, 0, action.payload);
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default cityWeatherSlice.reducer;
