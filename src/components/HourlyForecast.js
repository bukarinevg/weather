import {  useContext } from 'react';
import { timeFormat } from '@services/DateTime';
import weatherCodeDescription from '@utils/weatherCodeDescription';
import weatherImage from '@utils/weatherImage';
import isDay from '@services/IsDay';
import '@styles/HourlyForecast.scss';

import WeatherContext from '@contexts/WeatherContext';

function HourlyForecast({index}){

    const {daily} = useContext(WeatherContext);
    const hourly = daily.hourly[index];
    const sunrise = daily.sunrise[index];
    const sunset = daily.sunset[index];

    function tableRows(){
        return hourly.time.map((time, index) => index % 3 === 0 ? (
          <tr key={index} >
            <td>{timeFormat(time)}</td>
            <td>{hourly.temperature[index]}°C</td>
            <td class='hourly-table_weather-description'>
                <img className='hourly-table_weather-description_image'  src={weatherImage(hourly.weather_code[index], isDay( sunrise, sunset, time))} alt={weatherCodeDescription[hourly.weather_code[index]]} />
                {weatherCodeDescription[hourly.weather_code[index]]}
            </td>
            <td>{hourly.precipitation_probability[index]}%</td>
          </tr>
        ) : null
        );
    }
    return (
        <table className='hourly-table'>
            <thead>
            <tr>
                <th>Time</th>
                <th>Temperature</th>
                <th className='weather'>Weather</th>
                <th className='precipitation'>Precipitation</th>
            </tr>
            </thead>
            <tbody>{tableRows()}</tbody>
        </table>
    )
}

export default HourlyForecast