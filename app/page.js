'use client';
import styles from './page.module.css';
import { SearchFunc } from './parts/search/page';
import { SearchesFunc } from './parts/searches/page';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchFunc/>
      <br/>
      <SearchesFunc/>
    </main>
  );
};
