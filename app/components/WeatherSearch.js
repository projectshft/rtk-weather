import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../store/slices/cities';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const useSchema = (cities) => 
  yup.object().shape({
    searchTerm: yup
      .string()
      .required('A city name is required to search.')
      // .test( 
      //   'already-searched',
      //   'Weather data for this city has already been searched.',
      //   (value) => {
      //     !cities.some(city => city.city.name.toLowerCase() === value.toLowerCase);
      //   }
      // )
  });

export function WeatherSearch() {
  
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const [search, setSearch] = useState('');
  const schema = useSchema(cities);
  const [errorMessages, setErrorMessages] = useState({});

  const { // using react-hook-form and yup for form validation
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const validateSearch = (searchTerm) => {
    const localErrors = {};
    // Check if this city has already been searched to avoid duplicates in state
    const alreadySearched = cities.map(city => city.city.name.toLowerCase()).includes(search.toLowerCase());
    if (alreadySearched) {
      localErrors.alreadySearched = 'This city has already been searched.'
    }
    setErrorMessages(localErrors);
    return Object.keys(localErrors).length === 0; // Returns true if no errors
  }
  
  const handleFormSubmit = async () => {
    try {
      if(validateSearch(search)) {
        dispatch(fetchForecast(search)); // Runs AsyncThunk to grab weather data
      }
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
            {...register('searchTerm', { required: true })}
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
      <div className='d-flex justify-content-center'>
        {errors.searchTerm?.message && (
          <div className='text-danger'>{errors.searchTerm?.message}</div>
        )}
        {errorMessages.alreadySearched && (
          <div className='text-danger'>{errorMessages.alreadySearched}</div>
        )}
      </div>
    </div>
  );
};