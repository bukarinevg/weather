import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default App;
