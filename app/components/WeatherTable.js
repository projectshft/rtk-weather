'use client'
import { WeatherTableRow } from './WeatherTableRow';
import { useSelector } from 'react-redux';

/**
 * This compenent renders a table for weather data.
 * Includes columns for city name, temp, pressure, and humidity.
 * @returns {ReactNode} A React element that renders a table to display the weather.
 */
export function WeatherTable() {
  const cities = useSelector((state) => state.cities.cities);

  return (
    <div className='container'>
      <div className='col-12 text-center'>
        <table className='table'>
          <thead className='table-dark'>
            <tr>
              <th>City</th>
              <th>Temperature (F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {cities.map(cityObj => (<WeatherTableRow city={cityObj} key={cityObj.city.id}/>))}
          </tbody>
        </table>
      </div>
    </div>
  )
}