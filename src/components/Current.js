function Current({location, current_weather}){
    return ( 
        <header>
            <h1>Current Weather in {location}</h1>
            <p>Time: {current_weather.time}</p>
            <p>Temperature: {current_weather.temperature}°C</p>
            <p>Weather Code: {current_weather.weather_code}</p>
            <p>Sunrise: {current_weather.sunrise}</p>
            <p>Sunriseset: {current_weather.sunset}</p>
        </header>
    );
}

export default Current; // export the Header component