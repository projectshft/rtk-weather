import axios from 'axios'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData', async (city) => {
  try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4d2230e28dd5ff342317c6687cd2d078`)
      console.log(response)
      return response.data
    } catch (error) {
      console.log('ur a bad coder')
  }
}
)

const initialState = {city:[], status:'idle', error:null} 

export const weatherSlice = createSlice({ 
  name: 'weather', 
  initialState, 
  extraReducers: builder => {
    builder.addCase(fetchWeatherData.pending, state => {
      state.status = 'Loading'
      state.error = null
    })
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
    state.status = 'Got Eem',
    state.error = null
    state.city.push(action.payload)
  });
  builder.addCase(fetchWeatherData.rejected, state => {
    state.status = 'Failed',
    state.error = action.error.message
    return state;
  })
  }
 })

 export default weatherSlice.reducer