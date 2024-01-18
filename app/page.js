'use client';
import styles from './page.module.css';
import { SearchBarFunc } from './parts/SearchBar';
import { SearchesFunc } from './parts/Searches';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className='center'>
        <h1>Weather Forecast</h1>
        <br/>
      </header>
      <SearchBarFunc/>
      <br/>
      <SearchesFunc/>
    </main>
  );
};
