import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { getItemsPerDay, getAvgItemsPerDay, avg, convertKToF } from './functions';

export function WeatherTableRow({ city }) {

  /* Logic for temps */
  const temps = city.list.map(weather => weather.main.temp); // Gets temps for next 5 days
  const allTempsPerDay = getItemsPerDay(temps); // Groups temps by day
  const avgTempsPerDay = getAvgItemsPerDay(allTempsPerDay).map(day => convertKToF(day)); 
  
  /* Logic for pressures */
  const pressures = city.list.map(weather => weather.main.pressure);
  const allPressuresPerDay = getItemsPerDay(pressures);
  const avgPressuresPerDay = getAvgItemsPerDay(allPressuresPerDay)

  /* Logic for humidities */
  const humidities = city.list.map(weather => weather.main.humidity);
  const allHumiditiesPerDay = getItemsPerDay(humidities);
  const avgHumiditiesPerDay = getAvgItemsPerDay(allHumiditiesPerDay);

  return (
    <tr>
      <td>{city.city.name}, {city.city.country}</td>
      <td>
        <Sparklines data={avgTempsPerDay}>
          <SparklinesLine color='orange'/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>{avg(avgTempsPerDay)} F</div> {/* The average of the temp averages*/}
      </td>
      <td>
        <Sparklines data={avgPressuresPerDay}>
          <SparklinesLine color='green'/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>{avg(avgPressuresPerDay)} hPa</div> {/* The average of the pressure averages*/}
      </td>
      <td>
        <Sparklines data={avgHumiditiesPerDay}>
          <SparklinesLine color='blue'/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>{avg(avgHumiditiesPerDay)} %</div> {/* The average of the humidity averages*/}
      </td>
    </tr>
  );
}