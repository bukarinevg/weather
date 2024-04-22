import { useContext } from "react";
import { TimeFormat } from "../services/DateTime";
import HourlyCurrentContext from "../contexts/HourlyCurrentContext";


function HourlyCurrentForecastItem({ index }) {
    const forecast = useContext(HourlyCurrentContext);
    return (
        <div className="hourly-current-forecast-item">
        <div className="hourly-current-forecast-item__time">
            {TimeFormat(forecast.time[index])}
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