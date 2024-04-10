import weatherCodeDescription from '../utils/weatherCodeDescription';
import '../css/Forecast.css';

function Forecast({daily, currentTime}){

  function dateFormat(inputDate){
    let date = new Date(inputDate+ 'Z');
    return date.toLocaleDateString("en-GB", { weekday: 'long',date:'number', month: 'long', day: 'numeric',  timeZone: currentTime.timeZone});
  }

  function timeFormat(inputDate){
    let date = new Date(inputDate+ 'Z');
    return date.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit'}, {timeZone: currentTime.timeZone});
  }


  function tableRows(daily){
    return daily.sunrise.map((date, index) => (
      <tr key={date}>
        <td scope="row">{dateFormat(date)}</td>
        <td>{daily.temperature_min[index]}°C</td>
        <td>{daily.temperature_max[index]}°C</td>
        <td>{weatherCodeDescription[daily.weather_code[index]]}</td>
        <td>{timeFormat(daily.sunrise[index])}</td>
        <td>{timeFormat(daily.sunset[index])}</td>
      </tr>
    ))
  }

  return (
    <main>
      <h2>Forecast</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
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