import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const fetchData = createAsyncThunk(
  'city/get',
  async(cityName) => {
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=75f4785546ba2c0a068da88d46e4db01'
    const response = await fetch(url, {
      method: 'GET',
      dataType: 'json'
    });
    const data = await response.json();
    return data
  }
)

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    city: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const data = action.payload;
      const pressure = [];
      const humidity = [];
      const temperature = [];
      let cityName = data.city.name;
      for(let i = 0; i < data.list.length; i++){
        let curr = data.list[i]
    
        const temp = Math.floor((curr.main.temp - 273.15) * 9/5 + 32);
        temperature.push(temp);
        pressure.push(curr.main.pressure);
        humidity.push(curr.main.humidity);
        
      };
        const cityData = {
          cityName,
          temperature,
          pressure,
          humidity
        };  
        console.log(cityData.temperature[0])
        state.city.unshift(cityData);
      

      
    })
  }
});

export const { addNewCity } = citySlice.actions;

export default citySlice.reducer;