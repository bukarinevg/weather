import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { getWeatherData } from './services/api';

function WeatherApp() {
  let { city } = useParams();
  let [weatherData, setWeatherData] = useState(null);

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
    
  }, []); // Added city to dependency array to re-fetch data when city changes

  return (
    <div className="App">
      <main>
        <h1>Weather App</h1>
        <p>Weather data for {city}: {weatherData ? JSON.stringify(weatherData) : 'Loading...'}</p>
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/:city?" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
