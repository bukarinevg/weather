function Body({daily}){
    return (
        <main>
              <h2>Forecast</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Max Temp</th>
                    <th>Min Temp</th>
                    <th>Weather Code</th>
                    <th>Sunrise</th>
                    <th>Sunset</th>
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

export default Body;