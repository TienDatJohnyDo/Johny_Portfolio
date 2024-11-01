import React from 'react';
import './About.css';
import ProfileCard from './ProfileCard';
import ExperienceCard from './ExperienceCard'; // Ensure these components exist
import EducationCard from './EducationCard';   // Ensure these components exist

const About = () => {
  return (
    <div className="about-container">
      <div className="bento-box">
        
        <div className="box about-card">
          <h1>About Me</h1>
          <p>I am a recent graduate from the University of Calgary with a Bachelor of Science in Software Engineering.  <br></br>

          <br></br>     At CIBC, I provided daily reports and data analysis for senior leadership, while at H&R Block, I led the AI chatbot project for the DIY Tax software team.<br></br>

          <br></br>     I’m looking forward to applying my technical and analytical skills in a data analytics role to drive insights and support data-informed decisions.
</p>
        </div>
      </div>
      <div className="bento-box">
        <div className="box experience-card">
          <ExperienceCard />
        </div>
        <div className="box education-card">
          <EducationCard />
        </div>
      </div>
    </div>
  );
};

export default About;