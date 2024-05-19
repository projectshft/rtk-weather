import { getItemsPerDay, getAvgItemsPerDay, avg, convertKToF, getHighsAndLows } from './functions';
import { NewSparkline } from './NewSparkline';

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
        <NewSparkline data={highAndLowTemps} color='orange'/>
        <div>Avg: {avg(avgTempsPerDay)} F</div> {/* The average of the temp averages*/}
      </td>
      <td>
        <NewSparkline data={highAndLowPressures} color='green'/>
        <div>Avg: {avg(avgPressuresPerDay)} hPa</div> {/* The average of the pressure averages*/}
      </td>
      <td>
        <NewSparkline data={highAndLowHumidities} color='blue'/>
        <div>Avg: {avg(avgHumiditiesPerDay)} %</div> {/* The average of the humidity averages*/}
      </td>
    </tr>
  );
}