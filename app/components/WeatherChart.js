import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const WeatherChart = ({ weatherData }) => {
  const data = weatherData ? weatherData.map(entry => entry.main.temp) : [];

  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
};


const mapStateToProps = (state) => ({
  weatherData: state.weatherData
});

export default connect(mapStateToProps)(WeatherChart);