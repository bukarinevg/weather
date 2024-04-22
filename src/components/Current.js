import '../css/Current.css';
import {  useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';
import windDirection from '../utils/windDirection';
import weatherCodeDescription from '../utils/weatherCodeDescription';
import { timeFormat } from '../services/DateTime';
import isDay from '../services/IsDay';
import weatherImage from '../utils/weatherImage';
import HourlyCurrent from './HourlyCurrent';
import HourlyCurrentContext from '../contexts/HourlyCurrentContext';


function Current({location, currentTimeData}){
    const { current_weather: currentWeather, daily } = useContext(WeatherContext);
    const  currentTime = new Date(currentWeather.time);

    // const dayForecast = [daily.hourly[0], daily.hourly[1]];

    const amountHours = daily.hourly[0].time.filter((time, index) => {
        time = new Date(time);
        if(time >= currentTime){
            return true;
        }
    }).length;

    const dayForecast = {
        temperature: daily.hourly[0].temperature.slice(24-amountHours, 24).concat(daily.hourly[1].temperature.slice(0, 24-  amountHours)),
        time: daily.hourly[0].time.slice(24-amountHours, 24).concat(daily.hourly[1].time.slice(0, 24 - amountHours)),
        weather_code: daily.hourly[0].weather_code.slice(24-amountHours, 24).concat(daily.hourly[1].weather_code.slice(0, 24 - amountHours)),
    };

    const weatherDescription = weatherCodeDescription[currentWeather.weather_code];
    const windSpeed= Math.round(currentWeather.wind_speed );

    return ( 
        <article className="current-weather block mt-4" >
            <h4 className="current-weather_title">Current Weather</h4>
            <div className="current-weather_header ">
                <p className="">{location} </p>
            </div>
            <div className="current-weather_body pt-2">
                <div className="current-weather_info">
                    
                    <div className="current-weather_temperature mb-2">
                        
                        <img  src={weatherImage(currentWeather.weather_code, isDay( currentWeather.sunrise,currentWeather.sunset, currentWeather.time))} alt={weatherDescription} />
                    

                        <span className="date-day" >{Math.round(currentWeather.temperature)}°C</span>
                    </div>
                    
                    <span className="pro-title">{weatherDescription}</span>
                </div>
                <span className="current-weather_time">{currentTimeData.time} {currentTimeData.day_of_week}</span>
                <div className="current-weather_bullets">
                    <p className="bullet">
                        <b>Wind Speed: </b>
                            <span>{windSpeed} km/h</span>
                    </p>
                    {
                        windSpeed > 0 ? <p className="bullet"><b>Wind Direction:</b> <span>{windDirection(currentWeather.wind_direction)}</span></p> : null
                    }
                    <p className="bullet"><b>Precipitation:</b> <span>{currentWeather.precipitation}%</span></p>
                    <p className="bullet"><b>Sunrise/Sunset:</b> <span>{timeFormat(currentWeather.sunrise)}/{timeFormat(currentWeather.sunset)}</span>
                    </p>
                    
                </div>
            </div>
            <HourlyCurrentContext.Provider value={dayForecast}>
                <HourlyCurrent forecasts={dayForecast} />
            </HourlyCurrentContext.Provider>

        </article>
    );
}

export default Current; // export the Header component