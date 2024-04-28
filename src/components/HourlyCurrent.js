import React from 'react';
import '@styles/HourlyCurrent.scss';
import HourlyCurrentItem from '@components/HourlyCurrentItem';

const HourlyCurrent = ({ forecasts }) => {
  return (
    <div className='hourly-current'>
      <div  className='hourly-current_wrapper'>
      {forecasts.time.map( (forecast, index) => <HourlyCurrentItem key={index} index={index} />)}
      </div>
    </div>
  );
};

export default HourlyCurrent;