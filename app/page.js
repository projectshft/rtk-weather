'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from './store/slices/weather';

export default function Home() {
  const searches = useSelector((state) => state.weather.searches);
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(search));
  };

  const renderSearches = () => {
    if (searches.length > 0) {
      return searches.map((data) => {
        return (
          <li className='list-group-item' key={data.city.id}>
            <h3>{data.city.name}</h3>
          </li>
        );
      });
    } else {
      return <div>No posts to show.</div>
    }
  }

  
// handles errors like 404 to display the proper directions
  const renderError = () => {
    if (error) {
      if (error.includes('404')) {
        return <span>Please enter a valid city name.</span>
      } else {
        return <span>Error with API, please try again later.</span>
      };
    } else {
      return <span></span>
    }
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type='search' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            required
          ></input>
          <div className='alert alert-danger'>
            {renderError()}
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>
      <div>
        <ul className='list-group'>
          {renderSearches()}
        </ul>
      </div>
    </main>
  );
};
