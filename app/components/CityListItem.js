import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CityListItem = (props) => {
  const city = props.city;
  return (
    <tr className='text-center h-3'>
      <td>{city.name}</td>
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
    </tr>
  )
}

export default CityListItem;