import React from 'react';
import Slider from 'react-slick';
import { DateFormat } from '../services/DateTime';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeatherSlider = ({ forecasts }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div style={{ margin: '20px' }}>
      <Slider {...settings}>
        {forecasts.map((forecast, index) => (
          <div key={index} style={{ padding: '10px', textAlign: 'center' }}>
            <h2>{forecast.temperature}°C</h2>
            <p>{DateFormat(forecast.time)}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeatherSlider;