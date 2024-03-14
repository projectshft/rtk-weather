'use client';
import { useSelector } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../style.css';


const CityList = () => {
  const cities = useSelector((state) => state.city.city)
	return (
	
		
		<table className='table table-hover  city-table'>
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidityv</th>
				</tr>
			</thead>
			<tbody>
			{cities.map((city) => {
				return(
				<tr>
					<td >{city.cityName}</td>
					<td>
				<Sparklines data={city.temperature}>
				<SparklinesLine />
				</Sparklines>
					<p className='graph-data'>{city.temperature[0]} °F</p>
				</td>
				<td>
				<Sparklines data={city.pressure}>

				<SparklinesLine />
				</Sparklines>
				<p className='graph-data'>{city.pressure[0]} hPa</p>
				</td>
				<td>
				<Sparklines data={city.humidity}>
				<SparklinesLine />
				</Sparklines>
				<p className='graph-data'>{city.humidity[0]}%</p>
				</td>
				</tr>
			)})}
			</tbody>
		</table>

	);
};

export default CityList;