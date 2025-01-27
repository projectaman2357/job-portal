import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupPage.css';
import popupImage from '../assets/popup.png';

const PopupPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleRedirectToCandidateSignup = () => {
    navigate('/CandidateSignup'); // Navigate to CandidateSignup page
    setShowPopup(false); // Close the popup after navigation
  };

  const handleRedirectToEmployerSignup = () => {
    navigate('/EmployerSignup'); // Navigate to EmployerSignup page
    setShowPopup(false); // Close the popup after navigation
  };

  if (!showPopup) return null; // Don't render if the popup is closed

  return (
    <div className="popup-overlay" onClick={() => setShowPopup(false)}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          &times;
        </button>

        {/* Popup Content */}
        <img src={popupImage} alt="Popup" className="popup-image" />
        <div className="signup-options">
          <div className="signup-buttons">
            <button className="signup-btn" onClick={handleRedirectToEmployerSignup}>
              Sign up as Employer
            </button>
            <button className="signup-btn" onClick={handleRedirectToCandidateSignup}>
              Sign up as Candidate
            </button>
          </div>
        </div>
        <div className="social-login">
          <h4>Or sign up with</h4>
          <button className="social-btn google">Google</button>
          <button className="social-btn linkedin">LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default PopupPage;
