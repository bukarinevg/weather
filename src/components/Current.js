import  {Row, Col} from 'react-bootstrap';
import weatherCodeDescription from '../utils/weatherCodeDescription';
import '../css/Current.css';

function Current({location, currentWeather, currentTime}){

    const weatherDescription = weatherCodeDescription[currentWeather.weather_code];
    let sunrise = new Date(currentWeather.sunrise + 'Z');
    let sunset = new Date(currentWeather.sunset + 'Z');
    sunrise= sunrise.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit'}, {timeZone: currentTime.timeZone});
    sunset = sunset.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit'}, {timeZone: currentTime.timeZone});

    return ( 
        <header className="current-weather container mt-4">
            <div className="card card-margin">
                <div className="card-header no-border">
                    <h5 className="card-title">{location} </h5>
                </div>
                <div className="card-body pt-0">
                    <div className="widget-49">
                        <div className="widget-49-title-wrapper">
                            <div className="widget-49-date-primary">
                                <span className="widget-49-date-day">{currentWeather.temperature}°C</span>
                            </div>
                            <div className="widget-49-meeting-info">
                                <span className="widget-49-pro-title">Today: {weatherDescription}</span>
                                <span className="widget-49-meeting-time">{currentTime.time} {currentTime.day_of_week}</span>
                            </div>
                        </div>
                        <ul className="widget-49-meeting-points">
                            <li className="widget-49-meeting-item"><b>Sunrise:</b> <span>{sunrise}</span></li>
                            <li className="widget-49-meeting-item"><b>Sunset:</b> <span>{sunset}</span></li>

                        </ul>
                    </div>
                </div>
            </div>
         
            
        {
        /*             
            <p>Weather Code: {currentWeather.weather_code}</p>
            <p>Sunrise: {currentWeather.sunrise}</p>
            <p>Sunset: {currentWeather.sunset}</p> */
        }
        </header>
    );
}

export default Current; // export the Header component