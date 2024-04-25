import weatherImage from '@utils/weatherImage';
import weatherCodeDescription from '@utils/weatherCodeDescription';
import '@styles/WeatherDescriptionImage.scss';

function WeatherDescriptionImage({className= '', weatherCode, isDay, background = true}){
    className = background? `${className} weather-description-image` : '';
    return (
        <img 
            className={className}  
            src={weatherImage(weatherCode, isDay)} 
            alt={weatherCodeDescription[weatherCode] } 
        />

    );
}

export default WeatherDescriptionImage;