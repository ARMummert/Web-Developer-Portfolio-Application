import React, { useState } from 'react';
import fullicon from './images/fullicon.png';
import exitfullicon from './images/exitfullicon.png';

const Slideshow = ({ images, slideWidth = '100%', slideHeight = '100%' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleFullScreen = () => {
    const slideshow = document.querySelector('.slideshow');
    if (!isFullscreen) {
      if (slideshow.requestFullscreen) {
        slideshow.requestFullscreen();
      } else if (slideshow.mozRequestFullScreen) { 
        slideshow.mozRequestFullScreen();
      } else if (slideshow.webkitRequestFullscreen) { 
        slideshow.webkitRequestFullscreen();
      } else if (slideshow.msRequestFullscreen) { 
        slideshow.msRequestFullscreen();
      } 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { 
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { 
        document.msExitFullscreen();
      } 
    }
    setIsFullscreen(!isFullscreen);
  }

  return (
    <div>
      <div className='slideshow'style={{ width: 900, height: slideHeight }}>
        <img className='full-mode' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
        <button className="prev" onClick={goToPreviousSlide}>&#10094;</button>
        <button className="next" onClick={goToNextSlide}>&#10095;</button>  
        <button className="fullscreen" onClick={handleFullScreen}>
          <img src={isFullscreen ? exitfullicon : fullicon} alt={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}/>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;