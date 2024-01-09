import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
  },
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(city => city.id !== action.payload);
    },
  },
});

export const { addCity, removeCity } = citiesSlice.actions;
export default citiesSlice.reducer;