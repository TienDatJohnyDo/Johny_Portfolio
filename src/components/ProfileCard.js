import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src="path/to/your-photo.jpg" alt="Johny Do" className="profile-image" />
      <h2>Johny Do</h2>
      <p>I am seeking roles within Analytics.</p>
      <div className="social-icons">
        {/* Icons can be from Font Awesome or similar */}
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fas fa-file-alt"></i></a>
      </div>
    </div>
  );
};

export default ProfileCard;