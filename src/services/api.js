import { throwError } from "rxjs";

const BASE_URL = 'https://app-weather-o0lf.onrender.com/public/';

// Function to fetch data with a location parameter (GET request)
export const getWeatherData = async (location) => {
  const uniqueId = Math.random();
  let url;
  if(location)
    url = new URL(`${BASE_URL}${location}`);
  else
    url = new URL(`${BASE_URL}`);

  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw  {status: Number(response.status)}; 
    }
    let data = response.json();
    return data;
  } catch (error) {
    throw error; 
  }
  return;
};