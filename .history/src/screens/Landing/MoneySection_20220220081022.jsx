import React from 'react';
import DriversIcon from '../../assets/images/drivers-icon-white.png';
import VehicleIcon from '../../assets/images/vehicle-owners.png';
//import TestimonialImage from '../../assets/images/Rectangle 738.png';
import PlayButton from '../../assets/images/play-icon.png';


import './moneysection.css';


const MoneySection = () => {
  return (
    <div>
      <div className="money-container">
        <h2>Make Money With Us</h2>
        <div className="money-line"></div>
        <div className="moneysection">
          <img src={DriversIcon} alt="drivers" />
          <div className="driver-section">
            <h1>Drivers</h1>
            <p>Are you a professional driver seeking to serve more clients? Join our team today as there are various opportunities for you to learn, serve and earn more.</p>
          </div>
          <button>Sign Up</button>
        </div>
        <div className="moneysection">
          <img src={VehicleIcon} alt="vehicle" />
          <div className="driver-section">
            <h1>Vehicle Owners</h1>
            <p>Would you like to make some extra money from your vehicle? Then join our team to meet the needs of thousands of people and earn more.</p>
          </div>
          <button>Sign Up</button>
        </div>
        <h2 className='testimonial'>What People Are Saying About Us.</h2>
        <div className="money-line"></div>
        <div className="testimonial-image">
          <div className="overlay">
            <button className="testimonial-text"><img src={PlayButton} alt="text" /> Watch The Story</button>
          </div>
        </div>
      </div>
      <h2>A Unique C</h2>
    </div>
  );
};


export default MoneySection;
