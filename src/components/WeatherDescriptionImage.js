import weatherImage from '@utils/weatherImage';
import weatherCodeDescription from '@utils/weatherCodeDescription';
import '@styles/WeatherDescriptionImage.scss';

function WeatherDescriptionImage({className= '', weatherCode, isDay, background = true}){
    const fullClassName = background 
    ? `${className} weather-description-image` 
    : className;
    return (
        <img 
            className={fullClassName}  
            src={weatherImage(weatherCode, isDay)} 
            alt={weatherCodeDescription[weatherCode] } 
        />

    );
}

export default WeatherDescriptionImage;