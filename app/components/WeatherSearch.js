import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchForecast } from '../store/slices/cities';

export function WeatherSearch() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmitClick = async () => {
    try {
      dispatch(fetchForecast(search));
      setSearch(''); // Clear the input field

    } catch (error) {
      console.error(error);
      setSearch(''); // Clear the input field
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