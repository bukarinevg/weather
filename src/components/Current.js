import windDirection from '../utils/windDirection';
import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, timeFormat } from '../services/DateTime';
import '../css/Current.css';

function Current({location, currentWeather, currentTime}){
    const weatherDescription = weatherCodeDescription[currentWeather.weather_code];
    const windSpeed= Math.round(currentWeather.wind_speed )

    return ( 
        <article className="current-weather mt-4">
            <div className="current-card">
                <div className="current-card-header ">
                    <p className="">{location} </p>
                </div>
                <div className="current-card-body pt-2">
                    <div className="current-card-info">
                        
                        <div className="current-card-temperature mb-2">
                            <span className="date-day">{currentWeather.temperature}°C</span>
                        </div>
                        
                        <span className="pro-title">{weatherDescription}</span>
                    </div>
                    <span className="meeting-time">{currentTime.time} {currentTime.day_of_week}</span>
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