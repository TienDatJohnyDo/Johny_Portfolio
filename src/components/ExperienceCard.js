import React from 'react';
import './ExperienceCard.css';

// Import images
import cibcLogo from '../images/CIBC.png';
import hrblockLogo from '../images/H&RBlocklogo.png';

const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <h2>My Experience</h2>
      <div className="experience-item">
        <img src={hrblockLogo} alt="H&R Block Logo" className="company-logo" />
        <div className="experience-details">
          <p className="experience-date">April 2023 - August 2023</p>
          <h3 className="experience-title">Product Management Intern</h3>
          <p className="experience-company">H&R Block Canada</p>
        </div>
      </div>
      <div className="experience-item">
        <img src={cibcLogo} alt="CIBC Logo" className="company-logo" />
        <div className="experience-details">
          <p className="experience-date">May 2022 - December 2022</p>
          <h3 className="experience-title">Data Analyst Intern</h3>
          <p className="experience-company">CIBC Canada</p>
        </div>
      </div>

      
    </div>
  );
};

export default ExperienceCard;