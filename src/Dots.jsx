import React from 'react';

const Dots = ({ slidesCount, currentSlide, setCurrentSlide }) => {
  return (
    <div className="dots">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <span key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
