import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { getItemsPerDay, getAvgItemsPerDay, avg, convertKToF, getHighsAndLows } from './functions';

export function WeatherTableRow({ city }) {

  /* Logic for temps */
  const temps = city.list.map(weather => weather.main.temp); // Gets temps for next 5 days
  const allTempsPerDay = getItemsPerDay(temps); // Groups temps by day
  const highAndLowTemps = getHighsAndLows(allTempsPerDay);
  const avgTempsPerDay = getAvgItemsPerDay(allTempsPerDay).map(day => convertKToF(day));
  
  /* Logic for pressures */
  const pressures = city.list.map(weather => weather.main.pressure);
  const allPressuresPerDay = getItemsPerDay(pressures);
  const highAndLowPressures = getHighsAndLows(allPressuresPerDay);
  const avgPressuresPerDay = getAvgItemsPerDay(allPressuresPerDay)

  /* Logic for humidities */
  const humidities = city.list.map(weather => weather.main.humidity);
  const allHumiditiesPerDay = getItemsPerDay(humidities);
  const highAndLowHumidities = getHighsAndLows(allHumiditiesPerDay);
  const avgHumiditiesPerDay = getAvgItemsPerDay(allHumiditiesPerDay);

  return (
    <tr>
      <td>{city.city.name}, {city.city.country}</td>
      <td>
        <Sparklines data={highAndLowTemps}>
          <SparklinesLine color='orange'/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>Avg: {avg(avgTempsPerDay)} F</div> {/* The average of the temp averages*/}
      </td>
      <td>
        <Sparklines data={highAndLowPressures}>
          <SparklinesLine color='green'/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>Avg: {avg(avgPressuresPerDay)} hPa</div> {/* The average of the pressure averages*/}
      </td>
      <td>
        <Sparklines data={highAndLowHumidities}>
          <SparklinesLine color='blue'/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>Avg: {avg(avgHumiditiesPerDay)} %</div> {/* The average of the humidity averages*/}
      </td>
    </tr>
  );
}