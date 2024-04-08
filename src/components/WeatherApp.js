import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { getWeatherData } from '../services/api';
import Current from './Current';
import Forecast from './Forecast';
import Loading from './Loading';

function WeatherApp() {
  let [weatherData, setWeatherData] = useState(null);
  let [location, setLocation] = useState(new URLSearchParams(useLocation().search).get('location') || null); // [1


  console.log('location' ,location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]); 

  const { location: dataLocation, data } = weatherData || {};
  const { current_weather, daily } = data || {};

  return (
      
        <div className="WeatherApp">
          <h1>Weather App</h1>
          {
            weatherData?
            <>
              <Current location={dataLocation} current_weather={current_weather} />
              <Forecast location={dataLocation} daily={daily} />
            </>   
            : <Loading />
          }
                

            {/* <Loading /> */}
            {/* <p>Weather data for {location}: {weatherData ? JSON.stringify(weatherData) : 'Loading...'}</p> */}
        </div>
  );
}

export default WeatherApp;
