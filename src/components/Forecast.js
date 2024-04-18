import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, DateFormat } from '../services/DateTime';
import { useState } from 'react';
import weatherImage from '../utils/weatherImage';
import isDay from '../services/IsDay';
import ModalBased from './ModalBased';
import '../css/Forecast.css';
import Hourly from './Hourly';


function Forecast({daily}){

  const [show, setShow] = useState(false);
  const [hourly, setHourly] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function tableRows(){
    return daily.sunrise.map((date, index) => (
      <tr key={index} onClick={() =>hourlyWeather(index)}>
        <td scope="row">{DateFormat(date)}</td>
        <td className='weather-description'>          
          <img  src={`/weather/images/${weatherImage(daily.weather_code[index], isDay(daily.sunrise[index], daily.sunset[index], daily.hourly[index].time[12]))}`} 
          alt={weatherCodeDescription[daily.weather_code[index]]} />
          <span>{weatherCodeDescription[daily.weather_code[index]]}</span> 
        </td>
        <td>{daily.temperature_max[index]}°C</td>
        <td>{daily.temperature_min[index]}°C</td>
        <td>{daily.precipitation_sum[index]}%</td>
        <td>{TimeFormat(daily.sunrise[index])}</td>
        <td>{TimeFormat(daily.sunset[index])}</td>
      </tr>
    ))
  }

  function hourlyWeather(index){    
    setHourly(daily.hourly[index]);
    handleShow();
  }


  return (
    <article className='forecast-block'>
      <ModalBased show={show} handleClose={handleClose} heading='Hourly forecast' body={<Hourly hourly={hourly}/>}/>
      <h4 className='forecast-title'>Daily forecast</h4>
      <div className="table-responsive">
        <table className="forecast-table outline-none scroller">
          <caption>Weather forecast for the next 7 days, hourly forecast accesible on click </caption>
          <thead>
            <tr>
              <th className='outline-none' scope="col">Date</th>
              <th scope="col" className=''>Weather</th>
              <th scope="col">Max Temp</th>
              <th scope="col">Min Temp</th>
              <th scope="col">Precipitation</th>
              <th scope="col">Sunrise</th>
              <th scope="col">Sunset</th>
            </tr>
          </thead>
          <tbody>
            {tableRows()}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Forecast;