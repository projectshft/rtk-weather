import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import '../app/globals.css';
import useWeather from '../hooks/useWeather';
import Chart from '../components/Chart';
import { fetchWeatherData } from '../utils/api'; 

const IndexPage = () => {
  const [city, setCity] = useState('');
  const { state, dispatch } = useWeather(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'FETCH_WEATHER_REQUEST' });
      const weatherData = await fetchWeatherData(city);
      console.log('Weather Data:', weatherData); 
      dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: weatherData });
    } catch (error) {
      dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
    }
  };

  return (
    <div>
      <h1>Redux Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.weatherData && state.weatherData.list && (
        <div>
          <Chart data={state.weatherData.list.map(item => item.main.temp)} title="Temperature (F)" />
          <Chart data={state.weatherData.list.map(item => item.main.pressure)} title="Pressure" />
          <Chart data={state.weatherData.list.map(item => item.main.humidity)} title="Humidity" />
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <IndexPage />
  </Provider>
);

export default App;
