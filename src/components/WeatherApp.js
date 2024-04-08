import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWeatherData } from '../services/api';

function WeatherApp() {
  let { city } = useParams();
  let [weatherData, setWeatherData] = useState(null);
  console.log(city);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="WeatherApp">
      <main>
        <h1>Weather App</h1>
        <p>Weather data for {city}: {weatherData ? JSON.stringify(weatherData) : 'Loading...'}</p>
      </main>
    </div>
  );
}

export default WeatherApp;
