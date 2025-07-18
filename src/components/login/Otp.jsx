import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Otp.css';

const SAMPLE_OTP = '123456';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === SAMPLE_OTP) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid OTP. Try 123456');
    }
  };

  return (
    <div className="otp-bg">
      <form className="otp-card" onSubmit={handleSubmit}>
        <h2>Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          maxLength={6}
          autoFocus
        />
        {error && <div className="otp-error">{error}</div>}
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default Otp; 