import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { getWeatherData } from '../services/api';
import Current from './Current';
import Forecast from './Forecast';
import Loading from './Loading';
import Header from './Header';

function WeatherApp() {
  let [weatherData, setWeatherData] = useState(null);
  let [location, setLocation] = useState(new URLSearchParams(useLocation().search).get('location') || null); // [1


  console.log('location' ,location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setWeatherData(null);
        const data = await getWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]); 

  const { location: dataLocation, data, time:currentTime } = weatherData || {};
  const { current_weather: currentWeather, daily } = data || {};
  console.log('data', data);
  console.log('currentWeather', currentWeather);

  return (
      
        <div className="WeatherApp" >
          <Header setLocation={setLocation}/>
          {
            weatherData?
            <main className='container'>
              <Current location={dataLocation} currentWeather={currentWeather} currentTime={currentTime} />
              <Forecast location={dataLocation} daily={daily} />
            </main>   
            : <Loading />
          }
          
                

            {/* <Loading /> */}
            {/* <p>Weather data for {location}: {weatherData ? JSON.stringify(weatherData) : 'Loading...'}</p> */}
        </div>
  );
}

export default WeatherApp;
