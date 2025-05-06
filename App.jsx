import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import Home from './pages/Home.jsx'
import About from './pages/About';
import ExchangeRates from './pages/EXCHANGE RATES (LIVE)';
import ErrorPage from './pages/ErrorPage';


import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/error" element={<ErrorPage />} />
          
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
