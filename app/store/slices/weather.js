import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='

// request to API to get data
export const fetchSearch = createAsyncThunk('weather/fetchSearch', async (input) => {
  const response = await axios.get(`${ROOT_URL}${input}&appid=${API_KEY}`);
  return response.data;
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    searches: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  // builds cases based on fetchSearch's status and executes action
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searches.push(action.payload);
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
