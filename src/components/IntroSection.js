import React from 'react';
import './IntroSection.css'; // Import your updated CSS file
import Pdf from '../pdf/Resume.pdf'; // Import the PDF file

const IntroSection = () => {
    return (
        <div className="intro-section">
            <h1 className="intro-heading">Hi, I'm Johny Do!</h1>
            <p className="intro-text">
                I am a Recent Software Engineering Graduate <br /> with a passion for Data Analytics and <br />Data Science.
            </p>
            <a href={Pdf} target="_blank" rel="noopener noreferrer" className="resume-link">
                <button className="resume-button">
                    <i className="fas fa-download"></i> {/* Download icon */}
                     Resume
                </button>
            </a>
        </div>
    );
};

export default IntroSection;