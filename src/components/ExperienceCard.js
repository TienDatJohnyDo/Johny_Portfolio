import React from 'react';
import './ExperienceCard.css'; // Make sure to create a CSS file for styling

const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <h2>My Experience</h2>
      <div className="experience-item">
        <h3>Data Analyst Intern</h3>
        <p>CIBC Canada</p>
        <p>May 2022 - December 2022</p>
        <ul>
          <li>Developed and launched a Succession Planner Application.</li>
          <li>Enhanced reporting efficiency by reviewing Tableau dashboards.</li>
          <li>Acquired proficiency in VBA and Power Query.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Product Management Intern</h3>
        <p>H&R Block Canada</p>
        <p>April 2023 - August 2023</p>
        <ul>
          <li>Designed and implemented an AI chatbot conversation flow for DIY tax software.</li>
          <li>Collected and analyzed customer feedback using sentiment analysis.</li>
          <li>Collaborated with finance and marketing teams to optimize product positioning.</li>
        </ul>
      </div>
      {/* Add more experience items as needed */}
    </div>
  );
};

export default ExperienceCard;