import React from 'react';
import { useNavigate } from 'react-router-dom';
import IPhoneFrame from '../components/login/IPhoneFrame';
import LoginForm from '../components/login/LoginForm';
import logo from '../assets/airCanadaLogo.png';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // No validation required – just navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <IPhoneFrame>
      <div className="screen">
        <div className="login-container">
          <div className="logo">
            <img src={logo} alt="Air Canada Logo" />
          </div>
          <h2>Air Canada</h2>
          <LoginForm onLogin={handleLogin} />
          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </div>
      </div>
    </IPhoneFrame>
  );
}

export default LoginPage;