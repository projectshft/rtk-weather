'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../store/slices/weather';

/**
 * Provides search bar and retrieves the input.
 * @returns Search bar with error and submit handler.
 */
export function SearchBarFunc () {
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  /**
   * Prevents the page from reloading on submit, dispatches the search to the reducer, and resets the state to an empty string.
   * @param e information received when the form is submitted.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(search));
    setSearch('');
  };

  /**
   * Loads errors to display based on GET responses.
   * @returns "Please enter a valid city name" if error 404 is provided.
   * @returns Error with API if any other error code is provided.
   */
  const handleError = () => {
    if (error) {
      if (error.includes('404')) {
        return <span>Please enter a valid city name.</span>
      } else {
        return <span className='alert alert-danger'>Error with API, please try again later.</span>
      };
    };
  };
  
  return (
    <div>
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
          {handleError()}
        </div>
      </form>
    </div>
  );
};