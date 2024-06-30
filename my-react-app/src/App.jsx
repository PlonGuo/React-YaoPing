import './css/App.css';
import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/about" element = {<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
