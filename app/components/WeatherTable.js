import WeatherDataRow from './WeatherDataRow'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function WeatherTable() {
  const weatherData = useSelector((state) => state.weather.weatherData)
  const [defaultCityData, setDefaultCityData] = useState(null)

  const handleSetDefault = (data) => {
    localStorage.setItem('defaultCity', JSON.stringify(data))
  }

  useEffect(() => {
    const storedCity = localStorage.getItem('defaultCity')
    if (storedCity) setDefaultCityData(JSON.parse(storedCity))
  }, [])

  const rowsToRender = defaultCityData
    ? [
        defaultCityData,
        ...weatherData.filter((c) => c.id !== defaultCityData.id),
      ]
    : weatherData

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature (F)</th>
          <th scope="col">Pressure (hPa)</th>
          <th scope="col">Humidity (%)</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {rowsToRender.map((city) => (
          <WeatherDataRow
            key={city.id}
            data={city}
            onSetDefault={handleSetDefault}
          />
        ))}
      </tbody>
    </table>
  )
}
