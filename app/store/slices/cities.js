'use client';
import { createSlice } from '@reduxjs/toolkit';

const cities = localStorage.getItem('default') ? [JSON.parse(localStorage.getItem('default'))] : [];

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: cities,
  },
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action) => {

      const cityToRemove = state.cities.find(city => city.id == action.payload && city.default);
      
      if (cityToRemove) {
        localStorage.removeItem('default');
      }
      state.cities = state.cities.filter(city => city.id !== action.payload);
    },
    makeDefault: (state, action) => {
      state.cities = state.cities.map(city => {
        if (city.id === action.payload.id) {
          city.default = true;
        } else {
          city.default = false;
        }
        return city;
      })
      localStorage.setItem('default', JSON.stringify(state.cities.filter(city => city.default)[0]));
    }
  },
});

export const { addCity, removeCity, makeDefault } = citiesSlice.actions;
export default citiesSlice.reducer;