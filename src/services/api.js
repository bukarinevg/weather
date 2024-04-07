
const BASE_URL = 'https://app-weather-o0lf.onrender.com/public/';

// Function to fetch data with a location parameter (GET request)
export const getWeatherData = async (location) => {
  const uniqueId = Math.random();
  console.log(`[${uniqueId}] getWeatherData function called`);
  let url;
  if(location)
    url = new URL(`${BASE_URL}${location}`);
  else
    url = new URL(`${BASE_URL}`);
  console.log(`[${uniqueId}] sending request to: `, url);

  try {
    const response = await fetch(url);
    if (!response.status === 200) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`[${uniqueId}] Error fetching data: `, error.message);
    throw error;
  }
};