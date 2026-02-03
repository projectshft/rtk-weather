import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
    )
    const FiveDayWeatherData = []
    const daysList = response.data.list
    const cityWeatherData = {
      id: uuidv4(),
      city: response.data.city.name,
      temperature: [],
      humidity: [],
      pressure: [],
    }
    // groups weather data by date
    daysList.forEach((data) => {
      const currentDate = data.dt_txt.split(' ')[0]
      if (
        FiveDayWeatherData.length === 0 ||
        FiveDayWeatherData[FiveDayWeatherData.length - 1][0].dt_txt.split(
          ' '
        )[0] !== currentDate
      ) {
        FiveDayWeatherData.push([data])
      } else {
        FiveDayWeatherData[FiveDayWeatherData.length - 1].push(data)
      }
    })
    // creates an object of 5 days weather data.
    FiveDayWeatherData.forEach((day) => {
      const avgTemp =
        day.reduce((sum, item) => sum + item.main.temp, 0) / day.length
      const avgHumidity =
        day.reduce((sum, item) => sum + item.main.humidity, 0) / day.length
      const avgPressure =
        day.reduce((sum, item) => sum + item.main.pressure, 0) / day.length

      cityWeatherData.temperature.push(Math.round(avgTemp))
      cityWeatherData.humidity.push(Math.round(avgHumidity))
      cityWeatherData.pressure.push(Math.round(avgPressure))
    })
    return cityWeatherData
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded'

        const defaultCity = JSON.parse(localStorage.getItem('defaultCity'))

        const isDefaultCity =
          defaultCity && action.payload.city === defaultCity.city

        const alreadyExists = state.weatherData.some(
          (city) => city.city === action.payload.city
        )

        if (isDefaultCity || alreadyExists) {
          window.alert(`You've already searched ${action.payload.city}`)
          return
        }
        state.weatherData.push(action.payload)
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { init } = weatherSlice.actions
export default weatherSlice.reducer
