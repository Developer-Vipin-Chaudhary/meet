import React from 'react';

const Item = ({ image }) => {
  // console.log(image);
  console.log(image);
  const buyNow = (productName, productPrice) => {
    alert(`You have selected ${productName} for Rs. ${productPrice}/-`);
  };

  return (
    <div className="item">
      <img src={`./assets/${image}`} alt="Beauty Combo" />
      <div className="star icon">
        <span className="fa fa-star checked star"></span>
        <span className="fa fa-star checked star"></span>
        <span className="fa fa-star checked star"></span>
        <span className="fa fa-star checked star"></span>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </div>
      <p style={{ fontFamily: 'Montserrat' }}>
        Beauty Combo
        <br />
        <span style={{ fontWeight: 600, fontSize: 16 }}>
          Rs. 8400/- <br />
        </span>
        <span style={{ fontWeight: 300, fontSize: 12, color: 'lightgrey' }}>
          <del>Rs. 12000/-</del>
        </span>
        <span style={{ fontWeight: 300, fontSize: 12, color: 'green' }}>
          30%{' '}
        </span>
      </p>
      <button
        onClick={() => buyNow('Beauty Combos', 6000)}
        style={{ fontFamily: 'Montserrat' }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Item;
