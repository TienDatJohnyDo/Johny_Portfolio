import React from 'react';
import './EducationCard.css'; // Make sure to create a CSS file for styling

const EducationCard = () => {
  return (
    <div className="education-card">
      <h2>My Education</h2>
      <div className="education-item">
        <h3>Bachelor of Software Engineering</h3>
        <p>University of Calgary</p>
        <p>Graduated: May 2023</p>
      </div>
      {/* Add more education items if needed */}
    </div>
  );
};

export default EducationCard;