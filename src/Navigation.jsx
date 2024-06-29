import React from 'react';

const Navigation = ({ changeSlide }) => {
  return (
    <div className="navigation">
      <button className="prev" onClick={() => changeSlide(-1)}>❮</button>
      <button className="next" onClick={() => changeSlide(1)}>❯</button>
    </div>
  );
};

export default Navigation;
