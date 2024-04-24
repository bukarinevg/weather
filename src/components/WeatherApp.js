import { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { getWeatherData } from '@services/WeatherAPI';
import WeatherContext from '@contexts/WeatherContext'; 
import Current from '@components/Current';
import Forecast from '@components/Forecast';
import Loading from '@components/Loading';
import Header from '@components/Header';
import Error from '@components/Error';

import { useQuery } from 'react-query';


function WeatherApp() {
  const [location, setLocation] = useState(new URLSearchParams(useLocation().search).get('location') || null);

  const { data, error, isLoading, isError } = useQuery(['weatherData', location], () => getWeatherData(location), {
    retry: (failureCount, error) => {
      if (error === 404) return false;
      new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Retrying..., failureCount:', failureCount, 'error:', error);
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
  const { location: dataLocation, data:weatherData, time:currentTimeData } = data || {};

  return (
      
        <div className="WeatherApp" >
          <Header setLocation={setLocation}/>
          
            <main className='container'>
              <WeatherContext.Provider value={weatherData}>
                <Current location={dataLocation}  currentTimeData={currentTimeData} />
                 <Forecast />
              </WeatherContext.Provider>
          </main>   
          
        </div>
  );
}

export default WeatherApp;
