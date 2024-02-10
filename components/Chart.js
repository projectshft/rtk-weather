import React, { useEffect, useState } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { fetchWeatherData } from '@/utils/api';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData();
        setChartData(data); // Make sure data is in the format expected by Sparklines
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle the error, e.g., set a state to display an error message
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Chart</h2>
      <Sparklines data={chartData}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
};

export default Chart;
