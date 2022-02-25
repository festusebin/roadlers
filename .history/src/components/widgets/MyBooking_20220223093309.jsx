import React from 'react';

import '../css/mybooking.css';

const MyBooking = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-testimonial">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
            <p>Testimonials</p>
          </div>
          <img src={SocialMedia} alt="socials" />
        </div>
      </div>
    </div>
  );
};


export default MyBooking;
