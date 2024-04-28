import { useQuery } from 'react-query';
import { getWeatherData } from '@services/WeatherAPI';

export function useWeatherData(location) {
  return useQuery(
    ['weatherData', location], 
    () => getWeatherData(location), {
      retry: (failureCount, error) => error !== 404 && failureCount < 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 10000),
      staleTime: 1000 * 60 * 5,  // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: true

    }
  );
}
