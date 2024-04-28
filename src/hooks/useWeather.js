import { useQuery } from 'react-query';
import { getWeatherData } from '@services/WeatherAPI';

export function useWeatherData(location) {
  return useQuery(['weatherData', location], () => getWeatherData(location), {
    retry: (failureCount, error) => {
      if (error.status === 404) return false;
      return failureCount < 3; // Retry logic simplified
    },
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // Exponential backoff
  });
}
