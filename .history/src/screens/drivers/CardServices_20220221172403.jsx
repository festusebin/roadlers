import React from 'react';

import CarRental from '../../assets/images/car-rental.png';
import MonthlyFullTime from '../../assets/images/monthly-full-time.png';
import TravelServices from '../../assets/images/travel-pickup.png';
import Pickups from '../../assets/images/travel-pickup.png';
import LikeIcon from '../../assets/images/like-icon.png';

import './cardservices.css'

const CardServices = () => {
  return (
    <div>
      <div className="related-container">
        <h2>Related Services</h2>
        <div className="related-line"></div>
        <div className="card-services-container">
          <div className="card-services">
            <img src={CarRental} alt="car-rental" />
            <p>Car Rental From ₦25,000</p>
            <div className="card-services-line"></div>
            <div className="card-services-box">
              <button>View Offer</button>
              <img src={LikeIcon} alt="like" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CardServices;
