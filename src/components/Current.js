import windDirection from '../utils/windDirection';
import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, timeFormat } from '../services/DateTime';
import isDay from '../services/IsDay';
import weatherImage from '../utils/weatherImage';
import '../css/Current.css';
import { useState, useContext, useEffect } from 'react';
import WeatherContext from '../contexts/WeatherContext';

function Current({location, currentTime}){
    const { current_weather: currentWeather, daily } = useContext(WeatherContext);
    console.log(); 
    const dayForecast = [];

    const weatherDescription = weatherCodeDescription[currentWeather.weather_code];
    const windSpeed= Math.round(currentWeather.wind_speed )
    return ( 
        <article className="current-weather block mt-4" >
            <div className="current-card">
                <h4 className="current-title">Current Weather</h4>
                <div className="current-card-header ">
                    <p className="">{location} </p>
                </div>
                <div className="current-card-body pt-2">
                    <div className="current-card-info">
                        
                        <div className="current-card-temperature mb-2">
                           
                            <img  src={weatherImage(currentWeather.weather_code, isDay( currentWeather.sunrise,currentWeather.sunset, currentWeather.time))} alt={weatherDescription} />
                      
    
                            <span className="date-day" >{Math.round(currentWeather.temperature)}°C</span>
                        </div>
                        
                        <span className="pro-title">{weatherDescription}</span>
                    </div>
                    <span className="current-time">{currentTime.time} {currentTime.day_of_week}</span>
                    <div className="current-card-bullets">
                        <p className="bullet">
                            <b>Wind Speed: </b>
                             <span>{windSpeed} km/h</span>
                        </p>
                        {
                            windSpeed > 0 ? <p className="bullet"><b>Wind Direction:</b> <span>{windDirection(currentWeather.wind_direction)}</span></p> : null
                        }
                        <p className="bullet"><b>Precipitation:</b> <span>{currentWeather.precipitation}%</span></p>
                        <p className="bullet"><b>Sunrise/Sunset:</b> <span>{TimeFormat(currentWeather.sunrise)}/{TimeFormat(currentWeather.sunset)}</span>
                        </p>
                        
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Current; // export the Header component