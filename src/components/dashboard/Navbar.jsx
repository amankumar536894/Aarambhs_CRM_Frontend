import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/dashboard" className={`nav-btn${location.pathname === '/dashboard' ? ' active' : ''}`}>Dashboard</Link>
        <Link to="/dashboard/leads" className={`nav-btn${location.pathname === '/dashboard/leads' ? ' active' : ''}`}>Leads</Link>
        <button className="nav-btn">Tasks</button>
        <button className="nav-btn">Visits</button>
        <button className="nav-btn">Bookings</button>
      </div>
      <div className="navbar-right">
        <span className="venue-name">Hotel Lal International</span>
        <span className="venue-location">, Lucknow</span>
        <div className="profile-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span role="img" aria-label="profile">👤</span>
          {dropdownOpen && <ProfileDropdown />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 