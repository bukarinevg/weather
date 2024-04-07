import logo from './logo.svg';
import './App.css';
import { getWeatherData } from './services/api';
import { useState, useEffect, StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

 function App(){
  let { city } = useParams();
  console.log('city=', city);

  // let { city } = match.params;
  // console.log('location=', city);
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
  }, []);

  console.log(' data=' ,weatherData);

  return (
    // <StrictMode>
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <main>
          <h1>Weather App</h1>
          <p>Weather data: {JSON.stringify(weatherData)}</p>
        </main>
        
      </div>
    // </StrictMode>

    
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/:city?" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;

