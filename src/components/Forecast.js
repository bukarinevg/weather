import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, DateFormat } from '../services/DateTime';
import { useState, useContext } from 'react';
import weatherImage from '../utils/weatherImage';
import isDay from '../services/IsDay';
import ModalBased from './ModalBased';
import '../css/Forecast.css';
import Hourly from './Hourly';
import WeatherContext from '../contexts/WeatherContext';


function Forecast(){
  const [show, setShow] = useState(false);
  const [hourly, setHourly] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {daily:daily} = useContext(WeatherContext);


  function tableRows(){
    return daily.sunrise.map((date, index) => (
      <tr key={index} onClick={() =>hourlyWeather(index)}>
        <td scope="row">{DateFormat(date)}</td>
        <td className='weather-description'>     
          <div className='image'>
            <img   src={`${weatherImage(daily.weather_code [index], isDay(daily.sunrise[index], daily.sunset[index], daily.hourly[index].time[12]))}`} 
              alt={weatherCodeDescription[daily.weather_code[index]]} 
            />
          </div> 
          <div className='description-text' >
            <span>{weatherCodeDescription[daily.weather_code[index]]}</span> 
          </div>     
        </td>
        <td>{Math.round(daily.temperature_max[index])}°C</td>
        <td>{Math.round(daily.temperature_min[index])}°C</td>
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
    <article className='forecast-block block'>
      <ModalBased show={show} handleClose={handleClose} heading='Hourly forecast' body={<Hourly hourly={hourly}/>}/>
      <h4 className='forecast-title'>
        Daily forecast
        <img src='/weather/images/arrow.svg' width={100} height={20} className='show-more' />
      </h4>
      <div className='scrolled-forecast'>
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