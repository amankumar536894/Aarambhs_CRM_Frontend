import React from 'react';
import './ProfileDropdown.css';

const ProfileDropdown = () => (
  <div className="profile-dropdown">
    <div className="profile-info">
      <div className="profile-name">CHANDAN KUMAR</div>
      <div className="profile-email">chandan.kumar@email.com</div>
    </div>
    <div className="profile-actions">
      <button>Check Venue</button>
      <button>Switch Venue</button>
      <button>Switch Location</button>
      <button>Logout</button>
    </div>
  </div>
);

export default ProfileDropdown; 