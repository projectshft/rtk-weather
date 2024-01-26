import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const kelvinToFahrenheit = function (number) {
  let convertedNum = ((number - 273.15) * 9) / 5 + 32;
  return Number(convertedNum.toFixed(2));
};

export const fetchCityForeCast = createAsyncThunk(
  "forecasts/fetchCityForeCast",
  async (city) => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
    );

    const lat = await response.data[0].lat;
    const lon = await response.data[0].lon;
    const citySearch = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const everyThreeHours = citySearch.data.list;
    // reduced 40 items down to 5 arrays (days) with 8 values (3 hr blocks)
    const week = everyThreeHours.reduce(
      (acc, curr, i) => {
        const temp = curr.main.temp;
        const pressure = curr.main.pressure;
        const humidity = curr.main.humidity;

        const threeHrs = {
          temp: temp,
          pressure: pressure,
          humidity: humidity,
        };

        switch (true) {
          case i < 8:
            acc[0].push(threeHrs);
            break;
          case i > 7 && i < 16:
            acc[1].push(threeHrs);
            break;
          case i > 15 && i < 24:
            acc[2].push(threeHrs);
            break;
          case i > 23 && i < 32:
            acc[3].push(threeHrs);
            break;
          default:
            acc[4].push(threeHrs);
        }
        return acc;
      },
      [[], [], [], [], []]
    );

    const reducedWeek = [];
    // added every 3 hrs together to get temp humidity and pressure total for a day
    const reduceDays = week.forEach(function (day) {
      const reducedDay = day.reduce(
        (acc, curr) => {
          acc.temp += curr.temp;
          acc.pressure += curr.pressure;
          acc.humidity += curr.humidity;
          return acc;
        },
        {
          temp: 0,
          pressure: 0,
          humidity: 0,
        }
      );

      reducedWeek.push(reducedDay);
    });

    reducedWeek.forEach(function (day) {
      day.temp = kelvinToFahrenheit(day.temp / 8);
      day.pressure = day.pressure / 8;
      day.humidity = day.humidity / 8;
    });

    return { name: citySearch.data.city.name, fiveDay: reducedWeek };
  }
);

export const forecastSlice = createSlice({
  name: "forecasts",
  initialState: {
    allCityForecasts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityForeCast.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCityForeCast.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.allCityForecasts.push(action.payload);
      })
      .addCase(fetchCityForeCast.rejected, (state, action) => {
        state.status = "failed";
        state.error = "Invalid City";
      });
  },
});

export default forecastSlice.reducer;
