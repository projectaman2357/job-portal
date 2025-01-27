import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>Welcome to Job-Portal</h1>
        <p>Your one-stop solution for job searching and recruitment.</p>
      </header>
      <section className="home__content">
        <div className="home__info">
          <h2>About Us</h2>
          <p>
            Job-Portal connects talented individuals with top companies across various industries. 
            Our platform offers seamless job postings, applications, and candidate management 
            solutions.
          </p>
        </div>
        <div className="home__features">
          <h2>Key Features</h2>
          <ul>
            <li>User-friendly interface for job seekers and recruiters.</li>
            <li>Advanced search and filter options.</li>
            <li>Automated candidate email notifications.</li>
            <li>Secure and fast platform for managing job applications.</li>
          </ul>
        </div>
      </section>
      <footer className="home__footer">
        <p>&copy; 2025 Job-Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
