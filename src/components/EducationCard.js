import React from 'react';
import './EducationCard.css'; // Ensure this CSS file exists
import uCalgaryLogo from '../images/uofclogo.png'; // Adjust the path as needed
import wchs from '../images/wchs.jpg'; // Adjust the path as needed

const EducationCard = () => {
  return (
    <div className="education-card">
      <h2>My Education</h2>
      <div className="education-item">
        <img src={uCalgaryLogo} alt="University of Calgary" className="university-logo" />
        <div className="education-details">
          <p className="education-date">Graduated: May 2024</p>
          <h3 className="education-title">Bachelor of Software Engineering</h3>
          <p className="education-university">University of Calgary</p>
        </div>
      </div>
      <div className="education-item">
        <img src={wchs} alt="Western Canada High School" className="university-logo" />
        <div className="education-details">
          <p className="education-date">Graduated: June 2019</p>
          <h3 className="education-title">High School Diploma</h3>
          <p className="education-university">Western Canada High School</p>
        </div>
      </div>
      {/* Add more education items if needed */}
    </div>
  );
};

export default EducationCard;