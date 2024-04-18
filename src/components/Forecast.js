import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, DateFormat } from '../services/DateTime';
import { useState } from 'react';
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
        <td>{daily.temperature_max[index]}°C</td>
        <td>{daily.temperature_min[index]}°C</td>
        <td>{weatherCodeDescription[daily.weather_code[index]]}</td>
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
      <h2 className='forecast-title'>Daily forecast</h2>
      <div className="table-responsive">
        <table className=" forecast-table outline-none ">
          <caption>Weather forecast for the next 7 days, hourly forecast accesible on click </caption>
          <thead>
            <tr>
              <th className='outline-none' scope="col">Date</th>
              <th scope="col">Max Temp</th>
              <th scope="col">Min Temp</th>
              <th scope="col" className='weather-code'>Weather Code</th>
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