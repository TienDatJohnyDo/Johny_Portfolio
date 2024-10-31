import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

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

  return (
    <nav className="navbar">
      <h1 className="logo">Johny</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
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