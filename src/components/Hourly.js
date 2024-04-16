import { TimeFormat } from '../services/DateTime';
import weatherCodeDescription from '../utils/weatherCodeDescription';
import '../css/Hourly.css';

function Hourly({hourly}){

    function tableRows(){
        return hourly.time.map((time, index) => index % 3 == 0 ? (
          <tr key={index} >
            <td>{TimeFormat(time)}</td>
            <td>{hourly.temperature[index]}°C</td>
            <td>{weatherCodeDescription[hourly.weather_code[index]]}</td>
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
                <th>Precipitation</th>
            </tr>
            </thead>
            <tbody>{tableRows()}</tbody>
        </table>
    )
}

export default Hourly