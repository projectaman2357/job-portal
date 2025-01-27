import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './candidate-signup.css';

function CandidateSignup() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here (e.g., send data to the server)

    // Redirect to the Apply Jobs page after successful registration
    navigate('/view-posts'); // Navigate to the view posts page where the jobs are listed
  };

  return (
    <div className="candidate-signup-container">
      <div className="candidate-signup-card">
        <div className="candidate-signup-row">
          {/* Form Section */}
          <div className="candidate-signup-form-section">
            <h1 className="candidate-signup-title">Sign up For Candidate</h1>

            <form onSubmit={handleSubmit}>
              <div className="candidate-signup-input-group">
                <label htmlFor="name" className="candidate-signup-icon">👤</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="candidate-signup-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="candidate-signup-input-group">
                <label htmlFor="email" className="candidate-signup-icon">📧</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="candidate-signup-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="candidate-signup-input-group">
                <label htmlFor="password" className="candidate-signup-icon">🔒</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="candidate-signup-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="candidate-signup-input-group">
                <label htmlFor="repeatPassword" className="candidate-signup-icon">🔑</label>
                <input
                  type="password"
                  id="repeatPassword"
                  placeholder="Repeat your password"
                  className="candidate-signup-input"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                />
              </div>

              <div className="candidate-signup-checkbox-group">
                <input
                  type="checkbox"
                  id="subscribe"
                  checked={subscribe}
                  onChange={() => setSubscribe(!subscribe)}
                />
                <label htmlFor="subscribe">Subscribe to our newsletter</label>
              </div>

              <button type="submit" className="candidate-signup-btn">Register</button>
            </form>
          </div>

          {/* Image Section */}
          <div className="candidate-signup-image-section">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              alt="Sign up Illustration"
              className="candidate-signup-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateSignup;
