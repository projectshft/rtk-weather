'use client';
import { useDispatch } from 'react-redux';
import { addNewCity, fetchData } from '../store/slices/city';



const CitySearch = () => {
  const dispatch = useDispatch();
	
	const handleSubmit = async(event) => {
		event.preventDefault();
		await dispatch(fetchData(event.target.city.value));
	}

	return (
		<form class="search-city" onSubmit={handleSubmit}>
            <div class="form-group d-flex">
              <input
								name="city"
                class="form-control"
                id="search-city"
                type="text"
                placeholder="Enter City"
              />
              <button type="submit" class="btn btn-primary search ms-2">
                Search
              </button>
            </div>
          </form>
	);
};

export default CitySearch;