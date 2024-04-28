import React from 'react'
import { useSelector } from 'react-redux'
import WeatherSparkLine from './WeatherSparkline'

const weatherConditions = (city) => {
  const weatherStats = {name:city.city.name, id:city.city.id, temp:[], humidity:[], pressure:[]}

  city.list.forEach((dataPoint => {

    weatherStats.temp.push(dataPoint.main.temp)
    weatherStats.humidity.push(dataPoint.main.humidity)
    weatherStats.pressure.push(dataPoint.main.pressure)
}))
return weatherStats   
  
}

export const RenderConditions = () => {
const cities = useSelector((state) => { 
    state.weather.city
})
return cities.map((city) => { 
    const weatherData = weatherConditions(city)

return (

    <table key={city.city.id} className="row">
        <tbody>
          <tr className="row">
            <td className="city-name col-md-3">{city.city.name}</td>
            <td className="col-md-3">
              <WeatherSparkLine data={weatherData.temp} color="blue" />
              <p>{Math.round(weatherData.temp[0])}°</p>
            </td>
            <td className="col-md-3">
              <WeatherSparkLine data={weatherData.pressure} color="green" />
              <p>{weatherData.pressure[0]}</p>
            </td>
            <td className="col-md-3">
              <WeatherSparkLine data={weatherData.humidity} color="orange" />
              <p>{weatherData.humidity[0]} %</p>
            </td>
          </tr>
        </tbody>
      </table>

)
});
}