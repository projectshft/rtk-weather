'use client'
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherTable } from "./components/WeatherTable";

export default function Home() {
  return (
    <main className='container'>
      <br/>
      <WeatherSearch/>
      <br/>
      <WeatherTable/>
    </main>
  );
}