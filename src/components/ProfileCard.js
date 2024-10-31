import React from 'react';
import './ProfileCard.css';
import gradImage from '../images/Grad.jpg';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={gradImage} alt="Johny Do" className="profile-image" />
      <h2>Johny Do</h2>
      <p>
        Aspiring to contribute to <br /> 
        <span className="analytics">analytics teams!</span>
      </p>
      <div className="social-icons">
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/johnydo/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        {/* GitHub Icon */}
        <a href="https://github.com/TienDatJohnyDo" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        {/* YouTube Icon */}
        <a href="https://www.youtube.com/channel/UC0E6yHy-46NJHP596qP1T1g" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;