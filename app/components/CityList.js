'use client';
import { useSelector } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


const CityList = () => {
  const cities = useSelector((state) => state.city.city)
	return (
		
		<table>
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</tr>
			</thead>
			<tbody>
			{cities.map((city) => {
				return(
				<tr>
					<td>{city.name}</td>
					<td>
				<Sparklines data={city.temperature}>
				<SparklinesLine />
				</Sparklines>
				</td>
				<td>
				<Sparklines data={city.pressure}>
				<SparklinesLine />
				</Sparklines>
				</td>
				<td>
				<Sparklines data={city.humidity}>
				<SparklinesLine />
				</Sparklines>
				</td>
				</tr>
			)})}
			</tbody>
		</table>
	);
};

export default CityList;