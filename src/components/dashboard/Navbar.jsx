import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import ProfileDropdown from './ProfileDropdown';

const Navbar = ({ activeMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/dashboard" className={`nav-btn${location.pathname === '/dashboard' ? ' active' : ''}`}>Dashboard</Link>
        <Link to="/dashboard/leads" className={`nav-btn${location.pathname === '/dashboard/leads' ? ' active' : ''}`}>Leads</Link>
        <Link to="/dashboard/tasks" className={`nav-btn${activeMenu === 'Tasks' || location.pathname === '/dashboard/tasks' ? ' active' : ''}`}>Tasks</Link>
        <Link to="/dashboard/visits" className={`nav-btn${activeMenu === 'Visits' || location.pathname === '/dashboard/visits' ? ' active' : ''}`}>Visits</Link>
        <Link to="/dashboard/bookings" className={`nav-btn${activeMenu === 'Bookings' || location.pathname === '/dashboard/bookings' ? ' active' : ''}`}>Bookings</Link>
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