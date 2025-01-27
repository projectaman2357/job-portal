import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import './NavBar.css';
import logo from '../assets/logo.png';
import PopupPage from '../Pages/PopupPage'; // Adjust path if needed

const NavBar = () => {
  // State to manage visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__left">
          <img
            src={logo}
            alt="Job Portal Logo"
            className="navbar__logo"
          />
        </div>
        <div className="navbar__right">
          <ul className="navbar__menu">
            <li>
              <Link to="/login" className="navbar__button navbar__login-button">
                Login
              </Link>
            </li>
            <li>
              <button onClick={togglePopup} className="navbar__button navbar__signup-button">
                Sign-Up
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Render PopupPage when showPopup is true */}
      {showPopup && <PopupPage />}
    </div>
  );
};

export default NavBar;
