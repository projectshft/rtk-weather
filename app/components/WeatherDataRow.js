import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines'

export default function WeatherDataRow({ data, onSetDefault }) {
  const avgTemp = data.temperature.reduce(
    (temp, currentTemp) =>
      Math.round((temp + currentTemp) / data.temperature.length),
    0
  )
  const avgPressure = data.pressure.reduce(
    (pressure, currentPressure) =>
      Math.round((pressure + currentPressure) / data.pressure.length),
    0
  )
  const avgHumidity = data.humidity.reduce(
    (humidity, currentHumidity) =>
      Math.round((humidity + currentHumidity) / data.humidity.length),
    0
  )

  return (
    <tr>
      <th scope="row">{data.city}</th>
      <td>
        <Sparklines
          data={data.temperature}
          limit={5}
          width={100}
          height={20}
          margin={5}
        >
          <SparklinesLine color="blue" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{avgTemp} F</p>
      </td>
      <td>
        <Sparklines
          data={data.pressure}
          limit={5}
          width={100}
          height={20}
          margin={5}
        >
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{avgPressure} hPa</p>
      </td>
      <td>
        <Sparklines
          data={data.humidity}
          limit={5}
          width={100}
          height={20}
          margin={5}
        >
          <SparklinesLine color="red" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{avgHumidity} %</p>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-secondary default-Btn btn-sm"
          onClick={() => onSetDefault(data)}
        >
          Set Default
        </button>
      </td>
    </tr>
  )
}
