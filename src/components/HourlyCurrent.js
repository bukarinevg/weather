import React from 'react';
import '../css/HourlyCurrent.css';
import HourlyCurrentItem from './HourlyCurrentItem';

const HourlyCurrent = ({ forecasts }) => {
  return (
    <div className='hourly-current'>
        {forecasts.time.map( (forecast, index) => <HourlyCurrentItem key={index} index={index} />)}
    </div>
  );
};

export default HourlyCurrent;