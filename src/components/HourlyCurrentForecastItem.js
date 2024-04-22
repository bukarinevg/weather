import "../css/HourlyCurrentForecastItem.css";
import { useContext } from "react";
import HourlyCurrentContext from "../contexts/HourlyCurrentContext";
import { hourFormat, timeFormat } from "../services/DateTime";
import weatherImage from '../utils/weatherImage';
import isDay from '../services/IsDay';


function HourlyCurrentForecastItem({ index }) {
    const forecast = useContext(HourlyCurrentContext);
    return (
        <div className="hourly-current-forecast-item">
            <div className="hourly-current-forecast-item__time">
                {hourFormat(forecast.time[index])}
            </div>
            <div className="hourly-current-forecast-item__icon">
                {/* <img
                src={forecast.icon}
                alt={forecast.summary}
                width="50"
                height="50"
                /> */}
            </div>
            <div className="hourly-current-forecast-item__temperature">
                {Math.round(forecast.temperature[index])}
            </div>
        </div>
    );
}

export default HourlyCurrentForecastItem;