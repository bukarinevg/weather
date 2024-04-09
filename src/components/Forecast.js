function Forecast({daily}){
    return (
        <main>
              <h2>Forecast</h2>
              <table class="table">
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
                  {daily.sunrise.map((date, index) => (
                    <tr key={date}>
                      <td>{date}</td>
                      <td>{daily.temperature_max[index]}°C</td>
                      <td>{daily.temperature_min[index]}°C</td>
                      <td>{daily.weather_code[index]}</td>
                      <td>{daily.sunrise[index]}</td>
                      <td>{daily.sunset[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </main>
    )
}

export default Forecast;