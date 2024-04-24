import '@styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import Loading from '@components/Loading';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from '@components/WeatherApp';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react';


const queryClient = new QueryClient();


function App() {
  useEffect(() => {
    document.title = "Weather Forecast Application";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={
           <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
              <WeatherApp />
            </Suspense>
           </QueryClientProvider>
        } />
      </Routes>
    </Router>
  );
}

export default App;
