import React from 'react';
import { Link } from 'react-router-dom';  // import Link
import './Header.css';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="header-title">Loan Calculator</div>

      <div className="nav-links">
        <Link to="/" className="home-btn">HOME</Link>
        <Link to="/exchange-rates" className="nav-link">EXCHANGE RATES (LIVE)</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/error" className="nav-link">ERROR PAGE</Link>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
