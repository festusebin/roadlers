import React from 'react';

import Hide from '../../assets/images/hide-black.png'

import '../css/mybooking.css';

const MyBooking = () => {
  return (
    <div>
      <div className="booking-container">
        <div className="booking-testimonial">
          <div className="booking-logo">
            <p>My Booking</p>
          </div>
          <img src={Hide} alt="hide" />
        </div>
      </div>
    </div>
  );
};


export default MyBooking;
