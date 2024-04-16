import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { getWeatherData } from '../services/WeatherAPI';
import Current from './Current';
import Forecast from './Forecast';
import Loading from './Loading';
import Header from './Header';
import Error from './Error';

import { useQuery } from 'react-query';

function WeatherApp() {
  const [location, setLocation] = useState(new URLSearchParams(useLocation().search).get('location') || null);

  const { data, error, isLoading, isError } = useQuery(['weatherData', location], () => getWeatherData(location), {
    retry: (failureCount, error) => {
      if (error.status === 404) return false;
      new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Retrying..., failureCount:', failureCount, 'error:', error, 'status:', error.status);
      return failureCount < 3;
    },
  });

  if (isError) {
    return  ( 
      <div className="WeatherApp" >
        <Header setLocation={setLocation}></Header>
        <Error error={error} />
      </div>
    );
  }

  if (isLoading) {
    return  ( 
      <div className="WeatherApp" >
        <Header setLocation={setLocation}></Header>
        <Loading />
      </div>
    );
  }
  const { location: dataLocation, data:weatherData, time:currentTime } = data || {};
  const { current_weather: currentWeather, daily } = weatherData || {};

  return (
      
        <div className="WeatherApp" >
          <Header setLocation={setLocation}/>
          {
              <main className='container'>
                <Current location={dataLocation} currentWeather={currentWeather} currentTime={currentTime} />
                <Forecast daily={daily} />
              </main>   
          }
        </div>
  );
}

export default WeatherApp;
