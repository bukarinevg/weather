import weatherCodeDescription from '../utils/weatherCodeDescription';
import { TimeFormat, DateFormat } from '../services/DateTime';
import '../css/Forecast.css';


function Forecast({daily}){

  function tableRows(daily){
    return daily.sunrise.map((date, index) => (
      <tr key={date}>
        <td scope="row">{DateFormat(date)}</td>
        <td>{daily.temperature_max[index]}°C</td>
        <td>{daily.temperature_min[index]}°C</td>
        <td>{weatherCodeDescription[daily.weather_code[index]]}</td>
        <td>{TimeFormat(daily.sunrise[index])}</td>
        <td>{TimeFormat(daily.sunset[index])}</td>
      </tr>
    ))
  }

  return (
    <main className='forecast-block'>
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