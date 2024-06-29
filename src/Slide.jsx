import React from 'react';
import Item from './Item';

const Slide = ({ images }) => {
  return (
    <div className="slide">
      {images.map((image, index) => (
        <Item key={index} image={image} />
      ))}
    </div>
  );
};

export default Slide;
