import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const SAMPLE_USER = {
  phone: '9999999999',
  email: 'test@email.com',
  password: 'test123',
};

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (user === SAMPLE_USER.phone || user === SAMPLE_USER.email) &&
      password === SAMPLE_USER.password
    ) {
      setError('');
      navigate('/otp');
    } else {
      setError('Invalid credentials. Try 9999999999 or test@email.com, password: test123');
    }
  };

  return (
    <div className="login-bg">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={user}
          onChange={e => setUser(e.target.value)}
          autoFocus
        />
        <div className="login-password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="login-password-input"
          />
          <button
            type="button"
            className="login-password-eye"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 10C2.73 5.61 7.11 2.5 12 2.5C16.89 2.5 21.27 5.61 23 10C21.27 14.39 16.89 17.5 12 17.5C7.11 17.5 2.73 14.39 1 10Z" stroke="#888" strokeWidth="1.5"/>
              <circle cx="12" cy="10" r="3" stroke="#888" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
        {error && <div className="login-error">{error}</div>}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Login; 