import React, { useState } from 'react';
import Slide from '../Slide';
import Navigation from '../Navigation';
import Dots from '../Dots';
// import './Slider.css';

const slidesData = [
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide + direction + slidesData.length) % slidesData.length
    );
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <Slide key={index} images={slide} />
        ))}
      </div>
      <Navigation changeSlide={changeSlide} />
      <Dots
        slidesCount={slidesData.length}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};

export default Slider;
