import React, { useState } from 'react';
import './ImageCarousel.css'; // Optional: For styling

// Import images
import image1 from '../images/H&RBlock.png';
import image2 from '../images/Motiv Landing.png';
import image3 from '../images/Github.png';

// Array of images and their titles
const images = [
  { src: image1, title: 'H&R Block AI Chatbot' },
  { src: image2, title: 'Motiv Assist' },
  { src: image3, title: 'More projects on Github' }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button left">
        &#10094; {/* Left Arrow */}
      </button>
      
      <div style={{ textAlign: 'center' }}> {/* Center the image and title */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="carousel-image"
        />
        <p className="image-title">{images[currentIndex].title}</p>
      </div>
      
      <button onClick={nextSlide} className="carousel-button right">
        &#10095; {/* Right Arrow */}
      </button>
      
      <div className="indicator-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)} // Allow clicking on dots to navigate
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;