'use client'
import { WeatherTableRow } from './WeatherTableRow';
import { useSelector } from 'react-redux';

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
            {cities.map(cityObj => (<WeatherTableRow city={cityObj.data}/>))}
          </tbody>
        </table>
      </div>
    </div>
  )
}