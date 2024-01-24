import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const forecastSlice = createSlice({
  name: "forecasts",
  initialState: {
    forecasts: [],
    forecast: {},
  },
  reducers: {},
});

export default forecastSlice.reducer;
