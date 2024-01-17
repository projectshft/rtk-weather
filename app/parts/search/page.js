'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../store/slices/weather';

export function SearchFunc () {
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(search));
    setSearch('')
  };

  // handles errors like 404 to display the proper directions
  const renderError = () => {
    if (error) {
      if (error.includes('404')) {
        return <span>Please enter a valid city name.</span>
      } else {
        return <span className='alert alert-danger'>Error with API, please try again later.</span>
      }
    }
  };
  
  return (
    <div>
      <header className='center'>
        <h1>Weather Forecast</h1>
        <br/>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type='search' 
            value={search} 
            onChange={(e) => {
              setSearch(e.target.value)
              }}
            required
          ></input>
          <button type='submit' className='btn btn-secondary'>
            Search
          </button>
        </div>
        <div className='errors'>
          {renderError()}
        </div>
      </form>
    </div>
  )
}