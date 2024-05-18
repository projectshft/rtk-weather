import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../store/slices/cities';

export function WeatherSearch() {
  const dispatch = useDispatch();
  
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  
  const [search, setSearch] = useState('');

  const handleSubmitClick = async () => {
    try {
      
      dispatch(fetchForecast(search));

      // Clear the input field
      setSearch('');

    } catch (error) {
      console.error(error);
      setSearch('');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <input 
            value={search}
            className='form-control'
            placeholder='Get a five-day forecast in your favorite cities'
            onChange={event => setSearch(event.target.value)}
          />
        </div>
        <div className='col'>
          <button 
            className='btn btn-secondary'
            onClick={handleSubmitClick}
          >Submit</button>
        </div>
      </div>
    </div>
  );
};