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
          <h1>About Me</h1><br></br>
          <p>
          I am a recent graduate from the University of Calgary with a Bachelor of Science in Software Engineering, where I developed a strong foundation in problem-solving, software development, and data analysis.During my internship at CIBC, I provided daily reports and conducted in-depth data analysis for senior leadership, helping to drive strategic decisions with actionable insights. At H&R Block, I led the AI chatbot project for the DIY Tax software team, where I designed and implemented conversation flows, analyzed customer data, and collaborated with cross-functional teams to improve the overall user experience.            
            <br></br><br></br>Besides academics, I love staying active and one way I do that is by playing in a volleyball league every Wednesday and Sunday. I enjoy the competitive atmosphere and the opportunity to have fun with friends in a sport we all love. I also film our matches and upload them to YouTube!<br></br>
            <br></br>As for my career aspiration, I’m looking forward to applying my technical and analytical skills in a data analytics role to drive insights and support data-informed decisions.
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