import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../store/slices/cities';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export function WeatherSearch() {
  const schema = yup.object({
    search: yup
      .string()
      .required('A city name is required to search.')
      .test('already-searched', 'This city has already been searched.', (value) => {
        return !cities.map(city => city.city.name.toLowerCase()).includes(value?.toLowerCase());
      })
  });
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const [search, setSearch] = useState('');

  const { // using react-hook-form and yup for form validation
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), });

  const handleFormSubmit = async () => {
    try {
      dispatch(fetchForecast(search));
    } catch (error) {
      console.error(error);
    }
    setSearch(''); // Clear the input field
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