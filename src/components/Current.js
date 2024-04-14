import windDirection from '../utils/windDirection';
import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, timeFormat } from '../services/DateTime';
import '../css/Current.css';

function Current({location, currentWeather, currentTime}){
    const weatherDescription = weatherCodeDescription[currentWeather.weather_code];
    const windSpeed= Math.round(currentWeather.wind_speed )

    return ( 
        <header className="current-weather mt-4">
            <div className="current-card">
                <div className="current-card-header ">
                    <p className="">{location} </p>
                </div>
                <div className="current-card-body pt-2">
                    <div className="current-card-info">
                        <div className="current-card-temperature">
                            <span className="date-day">{currentWeather.temperature}°C</span>
                        </div>
                      
                            <span className="pro-title">
                                <b>Currently: </b>
                                {weatherDescription}
                            </span>
                            <span className="meeting-time">{currentTime.time} {currentTime.day_of_week}</span>
    
                    </div>
                    <div className="current-card-bullets">
                        <p className="bullet"><b>Wind Speed:</b> <span>{windSpeed} km/h</span></p>
                        {
                            windSpeed > 0 ? <p className="meeting-item"><b>Wind Direction:</b> <span>{windDirection(currentWeather.wind_direction)}</span></p> : null
                        }
                        <p className="bullet"><b>Sunrise:</b> <span>{TimeFormat(currentWeather.sunrise)}</span></p>
                        <p className="bullet"><b>Sunset:</b> <span>{TimeFormat(currentWeather.sunset)}</span></p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Current; // export the Header component