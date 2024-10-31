import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ReachOutSection.css';

const ReachOutSection = () => {
  return (
    <div id="contact" className="reach-out-section"> {/* Ensure id is set here */}
      <h2 className="heading">Reach Out and Connect</h2>
      <p className="description">
        I'm always open to discussing new opportunities, collaborations, or just connecting. 
        Feel free to reach out to me <br />via email or find my socials right under my Profile Card!
      </p>
      <div className="connect-buttons">
        <a href="mailto:johnydo448@gmail.com" className="connect-button">
          <FontAwesomeIcon icon={faEnvelope} className="mail-icon" /> {/* Mail icon */}
          Email Me
        </a>
      </div>
    </div>
  );
};

export default ReachOutSection;