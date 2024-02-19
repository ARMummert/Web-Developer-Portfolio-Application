import React, { useState } from 'react';

const Slideshow = ({ images, slideWidth = '100%', slideHeight = '100%' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleFullScreen = () => {
    const slideshow = document.querySelector('.slideshow');
    if (slideshow.requestFullscreen) {
      slideshow.requestFullscreen();
    } else if (slideshow.mozRequestFullScreen) { /* Firefox */
      slideshow.mozRequestFullScreen();
    } else if (slideshow.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      slideshow.webkitRequestFullscreen();
    } else if (slideshow.msRequestFullscreen) { /* IE/Edge */
      slideshow.msRequestFullscreen();
    }
  };

  return (
    <div>
      <div className='slideshow'style={{ width: slideWidth, height: slideHeight, position: 'relative' }}>
        <img className='full-mode' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '65%', height: '65%', objectFit: 'cover' }} />
        <button className="prev" onClick={goToPreviousSlide}>&#10094;</button>
        <button className="next" onClick={goToNextSlide}>&#10095;</button>  
        <button className="fullscreen" onClick={handleFullScreen}>Fullscreen</button>
      </div>
    </div>
  );
};

export default Slideshow;
