'use client';
import React from 'react';
import CityListItem from './CityListItem';
import { useSelector } from 'react-redux';


const CityList = () => {

  const cities = useSelector(state => state.cities.cities);

  if (!cities) {
    return (
      <div className='text-center'>
        <p className='lead'>Add a city to get started!</p>
      </div>
    )
  };

  return (
    <table className='table table-hover w-75'>
      <thead className='text-center'>
        <tr>
          <th>City</th>
          <th>Tempurature (F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
          {cities.map(city => <CityListItem key={city.id} city={city} />)}
        </tbody>
    </table>
  )
}

export default CityList;