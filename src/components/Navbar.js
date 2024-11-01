import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offset = 0;
      const offsetPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectsClick = () => {
    navigate('/'); // Navigate to the Home page
    setTimeout(() => {
      scrollToSection('projects'); // Scroll to the Projects section after navigating
    }, 0);
  };

  const handleContactClick = () => {
    navigate('/'); // Navigate to the Home page
    setTimeout(() => {
      scrollToSection('contact'); // Scroll to the Contact section after navigating
    }, 0);
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the Home page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the Home page
  };

  const handleAboutClick = () => {
    navigate('/about'); // Navigate to the About page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the About page
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Johny</h1>
      <ul className="nav-links">
        <li><a onClick={handleHomeClick}>Home</a></li> {/* Scrolls to top of Home */}
        <li><a onClick={handleAboutClick}>About</a></li> {/* Scrolls to top of About */}
        <li><a onClick={handleProjectsClick}>Projects</a></li>
        <li><a onClick={handleContactClick}>Contact</a></li>
      </ul>
      <div
        className="navbar-icon-container"
        onMouseEnter={() => setShowModal(true)}
        onMouseLeave={() => setShowModal(false)}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b5ee86c7cdd2e407637ce753cabb9f162b39d21b06cda027b308b9a90be00a?"
          className="navbar-icon"
          alt="Table Icon"
        />
        {showModal && (
          <div className="modal-popup">Currently in Calgary</div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;