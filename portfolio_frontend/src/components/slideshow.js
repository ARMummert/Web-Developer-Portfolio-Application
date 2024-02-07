import React, { useState } from 'react';

const Slideshow = ({ images, slideWidth = '100%', slideHeight = '100%' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow" style={{ width: slideWidth, height: slideHeight, position: 'relative' }}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <button className="prev" onClick={goToPreviousSlide}>&#10094;</button>
        <button className="next" onClick={goToNextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slideshow;
