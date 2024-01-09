import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CityListItem = (props) => {
  return (
    <tr className='text-center h-3'>
      <td>{props.city}</td>
      <td>
        <Sparklines data={props.temp}>
          <SparklinesLine />
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
      </td>
      <td>
        <Sparklines data={props.pressure}>
          <SparklinesLine />
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
      </td>
      <td>
        <Sparklines data={props.humidity}>
          <SparklinesLine />
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CityListItem;