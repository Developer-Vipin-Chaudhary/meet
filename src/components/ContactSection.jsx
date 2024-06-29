import React from 'react';

const ContactSection = () => {
  const subscribe = () => {
    const email = document.querySelector('.contact-section input').value;
    if (email) {
      alert(`Thank you for subscribing with ${email}`);
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="contact-section">
      <h2 className="try11" style={{ fontFamily: 'Montserrat' }}>
        Stay in Touch
      </h2>
      <p style={{ paddingLeft: '30px', fontFamily: 'Montserrat' }}>
        Get latest beauty products on Email.
      </p>
      <div className="contact-form">
        <input
          type="email"
          placeholder="Your Email Address"
          style={{
            border: 'solid 1px pink',
            marginRight: '5px',
            width: '400px',
            height: '30px',
          }}
        />
        <button
          onClick={subscribe}
          style={{
            backgroundColor: 'pink',
            paddingLeft: '25px',
            paddingRight: '25px',
            height: '53px',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
