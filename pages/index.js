import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import '../app/globals.css';
import useWeather from '../hooks/useWeather';
import Chart from '../components/Chart';
import { fetchWeatherData } from '../utils/api'; 
import '../app/globals.css'; 

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
    <div className="index-container">
      <h1 className="main-title">Weather App</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.weatherData && state.weatherData.list && (
        <div className="chart-container">
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
