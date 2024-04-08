import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:city?" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default App;
