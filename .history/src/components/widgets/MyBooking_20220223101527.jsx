import React from 'react';

import Hide from '../'

import '../css/mybooking.css';

const MyBooking = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-testimonial">
          <div className="footer-logo">
            <p>My Booking</p>
          </div>
          <img src={Hide} alt="hide" />
        </div>
      </div>
    </div>
  );
};


export default MyBooking;
