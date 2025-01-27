import React from 'react';
import './Login.css'; // Ensure you have a custom CSS file

function Login() {
  return (
    <div className="login-container">
      <div className="login-row">
        <div className="login-image">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </div>

        <div className="login-form">
          <div className="social-login">
            <p className="lead">Sign in with</p>
            <div className="social-buttons">
              <button className="social-btn facebook">Facebook</button>
              <button className="social-btn twitter">Twitter</button>
              <button className="social-btn linkedin">LinkedIn</button>
            </div>
          </div>

          <div className="divider">
            <p className="text-center">Or</p>
          </div>

          <input className="input-field" type="email" placeholder="Email address" />
          <input className="input-field" type="password" placeholder="Password" />

          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="/Forgot">Forgot password?</a>
          </div>

          <div className="submit-section">
            <button className="submit-btn">Login</button>
            <p className="register-link">
              Don't have an account? <a href="/Home" className="register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
