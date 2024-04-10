import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import Loading from './components/Loading';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './components/WeatherApp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <WeatherApp />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
