import React, { useState, useEffect } from 'react';
import './view-posts.css';

const ViewPosts = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [applicationMode, setApplicationMode] = useState(null); // Track application mode (link or resume)

  useEffect(() => {
    // Mock fetching job posts (replace this with an actual API call)
    const mockJobPosts = [
      {
        id: 1,
        jobTitle: 'Software Engineer',
        jobDescription: 'Develop and maintain software applications.',
        experienceLevel: 'INTERMEDIATE',
        candidateEmail: 'candidate@example.com',
        endDate: '2025-02-28'
      },
      {
        id: 2,
        jobTitle: 'Project Manager',
        jobDescription: 'Manage and lead project teams.',
        experienceLevel: 'EXPERT',
        candidateEmail: 'manager@example.com',
        endDate: '2025-03-15'
      },
      {
        id: 3,
        jobTitle: 'UI/UX Designer',
        jobDescription: 'Design and optimize user interfaces.',
        experienceLevel: 'BEGINNER',
        candidateEmail: 'designer@example.com',
        endDate: '2025-04-01'
      },
    ];

    // Simulate an API call
    setJobPosts(mockJobPosts);
  }, []);

  // Handle applying by link or resume
  const handleApply = (postId, mode) => {
    if (mode === 'link') {
      alert(`Applying for post ${postId} via link!`);
      // Handle applying via a link (e.g., submitting a URL)
    } else if (mode === 'resume') {
      alert(`Applying for post ${postId} via resume upload!`);
      // Handle resume upload (e.g., trigger file upload modal or form)
    }
  };

  return (
    <div className="view-posts-container">
      <h2>Your Job Posts</h2>

      {jobPosts.length === 0 ? (
        <p>No job posts found. Please post a job first.</p>
      ) : (
        <div className="job-posts-list">
          {jobPosts.map((post) => (
            <div key={post.id} className="job-post-card">
              <h3>{post.jobTitle}</h3>
              <p><strong>Description:</strong> {post.jobDescription}</p>
              <p><strong>Experience Level:</strong> {post.experienceLevel}</p>
              <p><strong>Candidate Email:</strong> {post.candidateEmail}</p>
              <p><strong>End Date:</strong> {post.endDate}</p>

              {/* Apply by Link or Resume */}
              <div className="apply-options">
                <button onClick={() => handleApply(post.id, 'link')}>Apply by Link</button>
                <button onClick={() => handleApply(post.id, 'resume')}>Apply by Resume</button>
              </div>

              {/* Conditionally render input for applying by link */}
              {applicationMode === 'link' && (
                <div className="apply-by-link">
                  <label htmlFor={`link-${post.id}`}>Enter your application link (e.g., LinkedIn or portfolio):</label>
                  <input
                    type="url"
                    id={`link-${post.id}`}
                    placeholder="Your link"
                    className="apply-link-input"
                  />
                  <button onClick={() => handleApply(post.id, 'link')}>Submit Link</button>
                </div>
              )}

              {/* Conditionally render file input for applying by resume */}
              {applicationMode === 'resume' && (
                <div className="apply-by-resume">
                  <label htmlFor={`resume-${post.id}`}>Upload your resume:</label>
                  <input
                    type="file"
                    id={`resume-${post.id}`}
                    className="apply-resume-input"
                  />
                  <button onClick={() => handleApply(post.id, 'resume')}>Submit Resume</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewPosts;
