import React from 'react';
import './ReachOutSection.css';

const ReachOutSection = () => {
  return (
    <div className="reach-out-section">
      <h2>Reach Out and Connect</h2>
      <p>I'm always open to discussing new opportunities, collaborations, or just connecting. Feel free to reach out to me on any of my social platforms or send me an email.</p>
      <div className="connect-buttons">
        <a href="mailto:your-email@example.com" className="connect-button">Email Me</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="connect-button">LinkedIn</a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="connect-button">GitHub</a>
      </div>
    </div>
  );
};

export default ReachOutSection;