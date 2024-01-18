import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { removeCity, makeDefault } from '../store/slices/cities';
import { useDispatch } from 'react-redux';

const CityListItem = (props) => {

  const dispatch = useDispatch();
  const city = props.city;

  const deleteCity = () => {
    dispatch(removeCity(city.id))
  }

  const setDefault = () => {
    dispatch(makeDefault(city))
  }

  return (
    <tr className='text-center h-3'>
      <td>{city.name}, {city.country[1]}</td>
      <td>
        <Sparklines data={city.temp} svgHeight={100} svgWidth={250}>
          <SparklinesLine color='green'/>
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
        <p className='m-0 p-0'>{city.avgTemp}&deg;F</p>
      </td>
      <td>
        <Sparklines data={city.pressure} svgHeight={100} svgWidth={250}>
          <SparklinesLine color='red'/>
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
        <p className='m-0 p-0'>{city.avgPressure} hPa</p>
      </td>
      <td>
        <Sparklines data={city.humidity} svgHeight={100} svgWidth={250}>
          <SparklinesLine color='blue'/>
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
        <p className='m-0 p-0'>{city.avgHumidity}%</p>
      </td>
      <td>
        <button className='btn btn-danger' onClick={() => deleteCity(city.id)}>Delete</button>
        {!city.default && (
        <button className='btn btn-primary my-2' onClick={() => setDefault()}>Set as Default</button>
        )}
        {city.default && (
          <p className='text-success'>Default City</p>
        )}
      </td>
    </tr>
  )
}

export default CityListItem;