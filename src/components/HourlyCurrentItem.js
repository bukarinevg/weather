import "@styles/HourlyCurrentItem.scss";
import { useContext } from "react";
import HourlyCurrentContext from "@contexts/HourlyCurrentContext";
import { hourFormat } from "@services/DateTime";
import weatherImage from "@utils/weatherImage";
import weatherCodeDescription from "@utils/weatherCodeDescription";


function HourlyCurrentItem({ index }) {
    const forecast = useContext(HourlyCurrentContext);
    return (
        <div className="hourly-current-item">
            <div className="hourly-current-item__time">
                {hourFormat(forecast.time[index])}
            </div>
            <div className="hourly-current-item__icon">
                <img height={30} width={30} src={`${weatherImage(forecast.weather_code[index], forecast.isDay[index])}`} 
              alt={weatherCodeDescription[forecast.weather_code[index]]} 
                />
            </div>
            <div className="hourly-current-item__temperature">
                {Math.round(forecast.temperature[index])}<span className="hourly-current-item__celcium">°C</span>
            </div>
        </div>
    );
}

export default HourlyCurrentItem;