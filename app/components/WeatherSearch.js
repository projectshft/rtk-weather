import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchForecast } from '../store/slices/cities';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export function WeatherSearch() {
  const schema = yup.object({ // using yup to help build a schema for react-hook-form
    search: yup
      .string()
      .required('A city name is required to search.')
      .test('already-searched', 'This city has already been searched.', (value) => {
        return !searches.includes(value?.toLowerCase());
      })
  });
  const dispatch = useDispatch();
  const [search, setSearch] = useState(''); // Keeps track of the current search
  const [searches, setSearches] = useState([]); // Keeps track of previous search values

  const { // using react-hook-form for form validation
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), });

  const handleFormSubmit = async () => {
    setSearches([...searches, search.toLowerCase()]); // Adds search to previous searches

    try {
      dispatch(fetchForecast(search)); // Dispatch asyncThunk in cities slice
    } catch (error) {
      console.error(error);
    }
    setSearch(''); // Clear the input field after each search
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='d-flex justify-content-center'>
        <div className='form-group col-8 d-flex'>  
          <input 
            {...register('search')}
            value={search}
            className='form-control'
            placeholder='Get a five-day forecast in your favorite cities'
            onChange={event => setSearch(event.target.value)}
          />
          <button 
            className='btn btn-secondary'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
      <br/>
      <div className='d-flex justify-content-center'>
        {errors.search?.message && (
          <div className='text-danger'>{errors.search?.message}</div>
        )}
      </div>
    </div>
  );
};
