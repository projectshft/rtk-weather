'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearch } from './store/slices/weather';

export default function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(search));
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <input 
          type='search' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>
    </main>
  );
};
