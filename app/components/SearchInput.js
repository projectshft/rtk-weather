import { fetchWeatherData } from '../redux/weatherService';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import weatherConditions from './weatherConditions';


const SearchInput = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const handleSearch = () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    dispatch(fetchWeatherData(city))
    setCity('');
    setError(null);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter a city..."
      />
      <button onClick={handleSearch}>Search</button> {}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SearchInput;
