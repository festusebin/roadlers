import React from 'react';
import DriversIcon from '../../assets/images/drivers-icon-white.png';
import VehicleIcon from '../../assets/images/vehicle-owners.png';
//import TestimonialImage from '../../assets/images/Rectangle 738.png';
import PlayButton from '../../assets/images/play-icon.png';
import FullDay from '../../assets/images/full-day-gift.png';
import FullMonth from '../../assets/images/full-month-gift.png';


import './moneysection.css';
import { Link } from 'react-router-dom';


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
          <div className="button-section">
            <button>Sign Up</button>
          </div>
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
          {/*<img src={TestimonialImage} alt="image" />*/}
            <button className="testimonial-text"><img src={PlayButton} alt="text" /> Watch The Story</button>
          </div>
        </div>
        <h2 className='gift'>A Unique Gift</h2>
        <div className="money-line"></div>
        <div className="gift-container">
          <img src={FullMonth} alt="gift" />
          <div className="gift-text">
            <p className='gift-p'>Gift someone a full-time driver for a month: this includes all the benefits such as medical insurance, trained professionals, etc.</p>
            <div className="gift-buttons">
              <p>₦85,000</p>
              <Link></Link>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="gift-container">
          <img src={FullDay} alt="gift" />
          <div className="gift-text">
            <p className='gift-p'>Gift someone a full-day driver: this includes all the benefits, like ride with us lunch on us.</p>
            <div className="gift-buttons">
              <p>₦12,000</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="gift-container button-card">
          <button>Book Cars</button>
          <button>Book Drivers</button>
          <button>Chat Now</button>
        </div>
      </div>
    </div>
  );
};


export default MoneySection;
