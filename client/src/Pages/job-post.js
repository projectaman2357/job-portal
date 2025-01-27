import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to different pages
import './JobPosting.css';
import logo from '../assets/logo.png'

const JobPosting = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('BEGINNER');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [endDate, setEndDate] = useState('');
  const [jobCount, setJobCount] = useState(0); // Track number of jobs posted
  const [isProfileVisible, setIsProfileVisible] = useState(true); // Toggle profile visibility
  const navigate = useNavigate(); // Navigate to different pages
  
  const handlePostJob = (e) => {
    e.preventDefault();
    
    // Simulate job posting (You can replace this with your API call)
    console.log("Job Posted:", { jobTitle, jobDescription, experienceLevel, candidateEmail, endDate });

    // Increment job count after posting a job
    const newJobCount = jobCount + 1;
    setJobCount(newJobCount);
    
    // Based on the number of jobs posted, redirect to different pages
    if (newJobCount <= 5) {
      navigate('/view-posts'); // Redirect to 'view posts' page if the company has posted 5 or fewer jobs
    } else {
      navigate('/premium-posts'); // Redirect to a premium posts page after posting more than 5 jobs
    }
  };

  return (
    <div className="job-posting-container">
      <div className="job-sidebar">
        <div className="profile-section">
          <img src={logo} alt="Profile Icon" className="profile-icon" />
          <div className="profile-name">Company Name</div>
          <div className="dropdown">
            <button className="dropdown-btn">View More</button>
            <div className="dropdown-content">
              <a href="/view-posts">View Posts</a>
              <a href="/view-applications">View Applications</a>
              <a href="/view-candidates">View Candidate Details</a>
            </div>
          </div>
        </div>
      </div>

      <div className="job-posting-form-section">
        <h2>Post a Job</h2>
        <form onSubmit={handlePostJob} className="job-posting-form">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter job title"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Job Description</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Enter job description"
              required
            />
          </div>

          <div className="form-group">
            <label>Experience Level</label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              required
            >
              <option value="BEGINNER">BEGINNER</option>
              <option value="INTERMEDIATE">INTERMEDIATE</option>
              <option value="EXPERT">EXPERT</option>
            </select>
          </div>

          <div className="form-group">
            <label>Candidate Email</label>
            <input
              type="email"
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
              placeholder="Enter candidate email"
              required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="post-job-btn">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default JobPosting;
