import React from 'react';
import '../css/HourlyCurrentForecast.css';
import HourlyCurrentForecastItem from './HourlyCurrentForecastItem';

const HourlyCurrentForecast = ({ forecasts }) => {
  console.log(forecasts);


  return (
    <div className='hourly-current-forecast'>
        {forecasts.time.map( (forecast, index) => <HourlyCurrentForecastItem key={index} index={index} />)}
    </div>
  );
};

export default HourlyCurrentForecast;