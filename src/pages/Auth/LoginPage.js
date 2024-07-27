import React, { useState } from 'react';
import './login.scss';

const LoginPage = () => {
  const [customerId, setCustomerId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberCustomerId, setRememberCustomerId] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // You can use the 'customerId' and 'password' state variables
    // Remember to handle the 'rememberCustomerId' and 'termsAgreed' flags
  };

  return (
    <div className="login-page">
      <header>
        <nav>
          <ul>
            <li>Banking</li>
            <li>Payment</li>
            <li>Account</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="branding">
          <h1>10 Years of Excellence in Finance</h1>
          <p>Demat. Bank Lithuania</p>
        </div>
        <div className="login-form">
          <input
            type="text"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={rememberCustomerId}
              onChange={() => setRememberCustomerId(!rememberCustomerId)}
            />
            Remember Customer ID
          </label>
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            Agree to Terms & Conditions
          </label>
          <button onClick={handleLogin}>Login</button>
        </div>
      </main>
      <footer>
        <div className="social-media">
          <a href="https://www.instagram.com/">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
        </div>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
