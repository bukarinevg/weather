import '../scss/Forecast.scss';
import { useState, useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';
import { timeFormat, dateFormat } from '../services/DateTime';
import weatherCodeDescription from '../utils/weatherCodeDescription';
import weatherImage from '../utils/weatherImage';
import ModalBased from './ModalBased';
import HourlyForecast from './HourlyForecast';


function Forecast(){
  const [show, setShow] = useState(false);
  const [hourly, setHourly] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {daily:daily} = useContext(WeatherContext);


  function tableRows(){
    return daily.sunrise.map((date, index) => (
      <tr key={index} onClick={() =>hourlyWeather(index)}>
        <td scope="row">{dateFormat(date)}</td>
        <td className='forecast__weather__description'>     
            <img className='forecast__weather__description__image' src={`${weatherImage(daily.weather_code [index], true)}`} 
              alt={weatherCodeDescription[daily.weather_code[index]]} 
            />
          <div  className='forecast__weather__description-text'>
            <span>{weatherCodeDescription[daily.weather_code[index]]}</span> 
          </div>     
        </td>
        <td>{Math.round(daily.temperature_min[index])}°C</td>
        <td>{Math.round(daily.temperature_max[index])}°C</td>
        <td>{daily.precipitation_sum[index]}%</td>
        <td>{timeFormat(daily.sunrise[index])}</td>
        <td>{timeFormat(daily.sunset[index])}</td>
      </tr>
    ))
  }

  function hourlyWeather(index){    
    setHourly(daily.hourly[index]);
    handleShow();
  }


  return (
    <article className='block'>
      <ModalBased show={show} handleClose={handleClose} heading='Hourly forecast' body={<HourlyForecast hourly={hourly}/>}/>
      <h4 className='forecast__title'>
        Daily forecast
        <img src='/weather/images/arrow.svg' width={100} height={20} className='forecast__show-more' />
      </h4>
      <div className='forecast__scrolled'>
        <table className="forecast__table outline-none scroller">
          <caption>Weather forecast for the next 7 days, hourly forecast accesible on click </caption>
          <thead>
            <tr>
              <th className='outline-none' scope="col">Date</th>
              <th scope="col" className=''>Weather</th>
              <th scope="col">Min Temp</th>
              <th scope="col">Max Temp</th>
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