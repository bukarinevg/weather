import { useState, useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import WeatherContext from '@contexts/WeatherContext'; 
import Current from '@components/Current';
import Forecast from '@components/Forecast';
import Loading from '@components/Loading';
import Header from '@components/Header';
import Error from '@components/Error';
import { useWeatherData } from '@hooks/useWeather';


function WeatherApp() {
  const locationSearch = useLocation().search;
  const [location, setLocation] = useState(new URLSearchParams(locationSearch).get('location') || '');
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useWeatherData(location);


  useEffect(() => {
    if(location){
      navigate(`?location=${location}`);
    }
  }, [location, navigate ]);


  if (isError) {
    return  ( 
      <div className="WeatherApp" >
        <Header  location={location} setLocation={setLocation}></Header>
        <Error error={error} />
      </div>
    );
  }

  if (isLoading) {
    return  ( 
      <div className="WeatherApp" >
        <Header location={location} setLocation={setLocation}></Header>
        <Loading />
      </div>
    );
  }
  const { location: dataLocation, data:weatherData, time:currentTimeData } = data || {};
  return (
      
        <div className="WeatherApp" >
          <Header location={location} setLocation={setLocation}/>
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
