import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { removeCity } from '../store/slices/cities';
import { useDispatch } from 'react-redux';

const CityListItem = (props) => {

  const dispatch = useDispatch();
  const city = props.city;

  const deleteCity = (cityId) => {
    console.log(cityId)
    dispatch(removeCity(cityId))
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
        <button className='btn btn-primary my-2' >Set as Default</button>
      </td>
    </tr>
  )
}

export default CityListItem;