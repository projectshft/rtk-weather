import { getItemsPerDay, getAvgItemsPerDay, avg, convertKToF, getHighsAndLows } from './functions';
import { NewSparkline } from './NewSparkline';

/**
 * This component renders a table row with the specific weather data for a searched city.
 * @param {Object} city 
 * @returns {ReactElement} 
 */
export function WeatherTableRow({ city }) {
  /** Gets an array of only the temp data */
  const temps = city.list.map(weather => weather.main.temp);
  /** Groups temps by day */
  const allTempsPerDay = getItemsPerDay(temps);
  /** Gets the highs and lows per day and converts them to Fahrenheit*/
  const highAndLowTemps = getHighsAndLows(allTempsPerDay).map(day => convertKToF(day));
  /** Gets the average temp per day and converts them to Fahrenheit*/
  const avgTempsPerDay = getAvgItemsPerDay(allTempsPerDay).map(day => convertKToF(day));
  
  /** Gets an array of only pressure data */
  const pressures = city.list.map(weather => weather.main.pressure);
  /** Groups pressures by day */
  const allPressuresPerDay = getItemsPerDay(pressures);
  /** Gets the high and low pressures for each day */
  const highAndLowPressures = getHighsAndLows(allPressuresPerDay);
  /** Gets the average pressure per day */
  const avgPressuresPerDay = getAvgItemsPerDay(allPressuresPerDay)

  /** Gets an array of only humidity data */
  const humidities = city.list.map(weather => weather.main.humidity);
  /** Groups humidity by day */
  const allHumiditiesPerDay = getItemsPerDay(humidities);
  /** Gets the high and low humidity for each day */
  const highAndLowHumidities = getHighsAndLows(allHumiditiesPerDay);
  /** Gets the average humidity per day */
  const avgHumiditiesPerDay = getAvgItemsPerDay(allHumiditiesPerDay);

  return (
    <tr>
      <td>{city.city.name}, {city.city.country}</td>
      <td>
        <NewSparkline data={highAndLowTemps} color='orange'/>
        <div>Avg: {avg(avgTempsPerDay)} F</div>
      </td>
      <td>
        <NewSparkline data={highAndLowPressures} color='green'/>
        <div>Avg: {avg(avgPressuresPerDay)} hPa</div>
      </td>
      <td>
        <NewSparkline data={highAndLowHumidities} color='blue'/>
        <div>Avg: {avg(avgHumiditiesPerDay)} %</div>
      </td>
    </tr>
  );
}