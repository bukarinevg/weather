import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, DateFormat } from '../services/DateTime';
import { useState } from 'react';
import ModalBased from './ModalBased';
import '../css/Forecast.css';


function Forecast({daily}){

  const [show, setShow] = useState(false);
  const [hourly, setHourly] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function tableRows(daily){
    return daily.sunrise.map((date, index) => (
      <tr key={index} >
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

  function dailyWeather(index){
    console.log('Daily weather', index);
    const hourly= daily.hourly[index];
    console.log('Hourly weather', hourly, Object.keys(hourly));
    let hourlyData = [];
    for(let i =0; i< Object.keys(hourly.time).length; i+= 3){
      hourlyData.push(
        <tr key={hourly.time[i] }>
          <td>{TimeFormat(hourly.time[i])}</td>
          <td>{hourly.temperature[i]}°C</td>
          <td>{weatherCodeDescription[hourly.weather_code[i]]}</td>
          <td>{hourly.precipitation_probability[i]}%</td>
        </tr>
        );

    }

    const hourlyTable = (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Weather</th>
            <th>Precipitation</th>
          </tr>
        </thead>
        <tbody>{hourlyData}</tbody>
      </table>
    );

    setHourly(hourlyTable);

    handleShow();

  }


  return (
    <main className='forecast-block'>
      <ModalBased show={show} handleClose={handleClose} heading='Hourly forecast' body={hourly}/>
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
              <th scope="col">Precipitation</th>
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