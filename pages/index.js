import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import useWeather from '../hooks/useWeather';
import Chart from '../components/Chart'; 


const IndexPage = () => {
  const [city, setCity] = useState('');
  const { state, dispatch } = useWeather(); 

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'FETCH_WEATHER_REQUEST' });
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
      {state.weatherData && (
        <div>
          <Chart data={state.weatherData.temperature} title="Temperature (F)" />
          <Chart data={state.weatherData.pressure} title="Pressure" />
          <Chart data={state.weatherData.humidity} title="Humidity" />
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
