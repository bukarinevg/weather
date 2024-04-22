import "../css/HourlyCurrentItem.css";
import { useContext } from "react";
import HourlyCurrentContext from "../contexts/HourlyCurrentContext";
import { hourFormat, timeFormat } from "../services/DateTime";


function HourlyCurrentItem({ index }) {
    const forecast = useContext(HourlyCurrentContext);
    return (
        <div className="hourly-current-item">
            <div className="hourly-current-item__time">
                {hourFormat(forecast.time[index])}
            </div>
            <div className="hourly-current-item__icon">
                {/* <img
                src={forecast.icon}
                alt={forecast.summary}
                width="50"
                height="50"
                /> */}
            </div>
            <div className="hourly-current-item__temperature">
                {Math.round(forecast.temperature[index])}
            </div>
        </div>
    );
}

export default HourlyCurrentItem;