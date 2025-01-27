import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar'; // Navbar Component
import Home from './Components/Home'; // Home Component
import JobPosting from './Pages/job-post'; // JobPosting Page
import CandidateSignup from './Pages/CandidateSignup'; // CandidateSignup Page
import EmployerSignup from './Pages/EmployerSignup'; // EmployerSignup Page
import ViewPosts from './Pages/view-posts'; // ViewPosts Page
import Login from './Pages/Login';
import PopupPage from './Pages/PopupPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <NavBar /> 

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-post" element={<JobPosting />} />
          <Route path="/candidatesignup" element={<CandidateSignup />} />
          <Route path="/employerSignup" element={<EmployerSignup />} />
          <Route path="/view-posts" element={<ViewPosts />} /> {/* Updated path to match correct casing */}
          <Route path="/Login" element={<Login/>}/>
          <Route path="/PopupPage" element={<PopupPage/>}/>
        </Routes>

        {/* Footer (if applicable) */}
      </div>
    </Router>
  );
}

export default App;
