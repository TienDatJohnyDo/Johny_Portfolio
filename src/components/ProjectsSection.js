import React from 'react';
import './ProjectsSection.css';
import ImageCarousel from './ImageCarousel'; // Import the carousel component

const ProjectsSection = () => {
  return (
    <div id="projects" className="projects-section">
      <h2>Recent Projects and Work Samples</h2>
      <p>These are some of the projects I have worked on from my internship, capstone, and personal projects!</p>
      <ImageCarousel /> {/* Add the ImageCarousel component here */}
    </div>
  );
};

export default ProjectsSection;