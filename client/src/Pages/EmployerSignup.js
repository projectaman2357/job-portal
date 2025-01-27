import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting after registration
import './EmployerSignup.css';
import employer from "../assets/employer-image.png"; // Import image from assets folder

function EmployerSignup() {
  const navigate = useNavigate(); // Navigate to another page after success
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [industry, setIndustry] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingMobile, setLoadingMobile] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailVerified || !mobileVerified) {
      alert('Please verify your email and mobile number to activate the account.');
      return;
    }
    // Handle form submission (API call, etc.)
    alert('Company registered successfully!');
    
    // Redirect to the job post page after successful registration
    navigate('/job-post');
  };

  const handleEmailVerification = () => {
    setLoadingEmail(true);
    // Simulate OTP generation and sending (this would normally be an API call)
    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    setGeneratedOtp(generatedOtp);
    setLoadingEmail(false);
    setIsOtpSent(true);
    alert(`OTP Sent: ${generatedOtp}`); // For demo purposes
  };

  const handleOtpVerification = () => {
    if (otp === String(generatedOtp)) {
      setEmailVerified(true);
      alert('Email verified successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleMobileVerification = () => {
    setLoadingMobile(true);
    // Simulate API call or OTP verification for mobile
    setTimeout(() => {
      setMobileVerified(true);
      setLoadingMobile(false);
      alert('Mobile number verified successfully!');
    }, 2000); // Simulate a delay of 2 seconds
  };

  return (
    <div className="container">
      <div className="form-row">
        {/* Left Side: Image */}
        <div className="image-section">
          <img src={employer} alt="Company Registration" className="form-image" />
        </div>

        {/* Right Side: Form */}
        <div className="form-section">
          <h3 className="text-center">Company Registration Form</h3>

          <form onSubmit={handleSubmit} className="mt-4">
            {/* Company Name */}
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                className="form-control"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group mt-3">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-info mt-2"
                onClick={handleEmailVerification}
                disabled={loadingEmail || isOtpSent}
              >
                {loadingEmail ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </div>

            {/* OTP Input for Email Verification */}
            {isOtpSent && (
              <div className="form-group mt-3">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  className="form-control"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-info mt-2"
                  onClick={handleOtpVerification}
                >
                  Verify OTP
                </button>
              </div>
            )}

            {/* Mobile Number */}
            <div className="form-group mt-3">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-info mt-2"
                onClick={handleMobileVerification}
                disabled={loadingMobile}
              >
                {loadingMobile ? 'Verifying...' : 'Verify Mobile'}
              </button>
            </div>

            {/* Industry */}
            <div className="form-group mt-3">
              <label htmlFor="industry">Industry</label>
              <input
                type="text"
                id="industry"
                className="form-control"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-group mt-4 text-right">
              <button type="reset" className="btn btn-light">Reset</button>
              <button type="submit" className="btn btn-warning ml-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployerSignup;
