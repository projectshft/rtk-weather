'use client';
import { useDispatch } from 'react-redux';
import { fetchData } from '../store/slices/city';



const CitySearch = () => {
  const dispatch = useDispatch();
	
	const handleSubmit = async(event) => {
		event.preventDefault();
		await dispatch(fetchData(event.target.city.value));
	}

	return (
    <>
    <h1 style={{textAlign: "center", marginTop: "50px"}}>Weather Data</h1>
		<form class="search-city" onSubmit={handleSubmit}>
            <div class="form-group d-flex">
              <input
								name="city"
                class="form-control"
                id="search-city"
                type="text"
                placeholder="Enter City"
                style={{marginTop: "60px"}}
              />
              <button type="submit" class="btn btn-primary search ms-2" style={{marginTop: "60px"}}>
                Search
              </button>
            </div>
          </form>
          </>
	);
};

export default CitySearch;