import React from 'react';
import '@styles/HourlyCurrent.scss';
import HourlyCurrentItem from '@components/HourlyCurrentItem';

const HourlyCurrent = ({ forecasts }) => {
  return (
    <div className='hourly-current'>
        {forecasts.time.map( (forecast, index) => <HourlyCurrentItem key={index} index={index} />)}
    </div>
  );
};

export default HourlyCurrent;