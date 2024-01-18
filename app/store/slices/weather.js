import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// create env.development.local in rtk-weather folder and make a variable named NEXT_PUBLIC_WEATHER_API_KEY and set it equal to API key
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';

/**
 * requests data from API based off search and waits for response
 * @param input search 
 * @returns response from API
 */
export const fetchSearch = createAsyncThunk('weather/fetchSearch', async (input) => {
  const response = await axios.get(`${ROOT_URL}${input}&appid=${API_KEY}`);
  return response.data;
});

/**
 * creates a slice with the response information
 * @returns if successful it returns API results in state and resets the error state to null
 * @returns if failed it returns the error message in state
 */
export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    searches: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searches.push(action.payload);
        state.error = null
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
