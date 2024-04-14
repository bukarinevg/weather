import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, DateFormat } from '../services/DateTime';
import { useState } from 'react';
import MoodalBased from './ModalBased';
import '../css/Forecast.css';


function Forecast({daily}){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function tableRows(daily){
    return daily.sunrise.map((date, index) => (
      <tr key={index} onClick={() => dailyWeather(index)}>
        <td scope="row">{DateFormat(date)}</td>
        <td>{daily.temperature_max[index]}°C</td>
        <td>{daily.temperature_min[index]}°C</td>
        <td>{weatherCodeDescription[daily.weather_code[index]]}</td>
        <td>{TimeFormat(daily.sunrise[index])}</td>
        <td>{TimeFormat(daily.sunset[index])}</td>
      </tr>
    ))
  }

  function dailyWeather(index){
    console.log('Daily weather', index);
    const hourly= daily.hourly[index];
    console.log('Hourly weather', hourly, Object.keys(hourly));
    

  }


  return (
    <main className='forecast-block'>
      <MoodalBased show={show} handleClose={handleClose} heading='Hourly forecast' body='Hourly forecast goes here'/>
      <h2 className='forecast-title'>Daily forecast</h2>
      <div className="table-responsive">
        {/* table-striped-primary */}
        <table className=" forecast-table outline-none ">
          <caption>Weather forecast for the next 7 days</caption>
          <thead>
            <tr>
              <th className='outline-none' scope="col">Date</th>
              <th scope="col">Max Temp</th>
              <th scope="col">Min Temp</th>
              <th scope="col">Weather Code</th>
              <th scope="col">Sunrise</th>
              <th scope="col">Sunset</th>
            </tr>
          </thead>
          <tbody>
            {tableRows(daily)}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Forecast;