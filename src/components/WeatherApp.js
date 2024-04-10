import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { getWeatherData } from '../services/api';
import Current from './Current';
import Forecast from './Forecast';
import Loading from './Loading';
import Header from './Header';
import Error from './Error';

function WeatherApp() {
  const [error, setError] = useState(null); 
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(new URLSearchParams(useLocation().search).get('location') || null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setWeatherData(null);
        setLoading(true);
        let data = await getWeatherData(location);
        if (typeof data === 'number') {
          setError(response.status);
          return;
        }
        setWeatherData(data);


      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [location]); 


  if (error) {
    return  ( 
      <div className="WeatherApp" >
        <Header setLocation={setLocation}></Header>
        <Error error={error} />
      </div>
    );
  }

  if (loading) {
    return  ( 
      <div className="WeatherApp" >
        <Header setLocation={setLocation}></Header>
        <Loading />
      </div>
    );
  }
  const { location: dataLocation, data, time:currentTime } = weatherData || {};
  const { current_weather: currentWeather, daily } = data || {};

  return (
      
        <div className="WeatherApp" >
          <Header setLocation={setLocation}/>
          {
              <main className='container'>
                <Current location={dataLocation} currentWeather={currentWeather} currentTime={currentTime} />
                <Forecast daily={daily} currentTime={currentTime} />
              </main>   
          }
        </div>
  );
}

export default WeatherApp;
