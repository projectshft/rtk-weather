
'use client'
import React from 'react';
import SearchBar from './components/searchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherAPI } from './store/slices/weatherSlice';
import { SparklinesLine, Sparklines, SparklinesReferenceLine } from 'react-sparklines';

function getHighLow(data) {
    if (data.length === 0) return { high: 0, low: 0 };
    const high = Math.round(Math.max(...data));
    const low = Math.round(Math.min(...data));
    return { high, low };
}

function averageTemps(data) {
    if (data.length === 0) return 0;
    const sum = data.reduce((accumulator, value) => accumulator + value, 0);
    return Math.round(sum / data.length);
}

export default function Home() {
    const dispatch = useDispatch();
    const cities = useSelector((state) => [...state.weather.cities].reverse());
    const loading = useSelector((state) => state.weather.loading);
    const error = useSelector((state) => state.weather.error);

    const handleSearch = (searchCity) => {
        dispatch(fetchWeatherAPI(searchCity));
    };

    return (
        <div className='smaller'>
            <div className='boxes'>
                <h1 className='page-title'>Basic RTK Weather App</h1>

                <SearchBar onSearch={handleSearch} />

                {loading && <p className='Slow-ding'>Be super patient or you'll run out of time.</p>}
                {error && <p className='error'>Error: {error}</p>}

                {cities.map((cityData, index) => (
                    <div key={index} className='big-container'>
                        <h2 className='city-name-render'>Weather in {cityData.city.name}</h2>
                        <div className='render-container'>
                            <div className='spark-box'>
                                <h3 className='temperature-title'>Temperature</h3>
                                <Sparklines data={cityData.temperature} height={40}>
                                    <SparklinesLine color='blue' />
                                    <SparklinesReferenceLine type='avg' />
                                </Sparklines>
                                <p className='average-temp-display'>
                                    Average 5-day Temperature: {averageTemps(cityData.temperature)}°F
                                </p>
                                <p className='average-temp-display'>High: {getHighLow(cityData.temperature).high}°F</p>
                                <p className='average-temp-display'>Low: {getHighLow(cityData.temperature).low}°F</p>
                            </div>
                            <div className='spark-box'>
                                <h3 className='pressure-title'>Pressure</h3>
                                <Sparklines data={cityData.pressure} height={40}>
                                    <SparklinesLine color='green' />
                                    <SparklinesReferenceLine type='avg' />
                                </Sparklines>
                                <p className='average-pressure-display'>
                                    Average 5-day Pressure: {averageTemps(cityData.pressure)} hPa
                                </p>
                            </div>
                            <div className='spark-box'>
                                <h3 className='humidity-title'>Humidity</h3>
                                <div className='sparkline-box'>
                                    <Sparklines data={cityData.humidity} height={40}>
                                        <SparklinesLine color='purple' />
                                        <SparklinesReferenceLine type='avg' />
                                    </Sparklines>
                                </div>
                                <p className='average-humidity-display'>Average: {averageTemps(cityData.humidity)}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}