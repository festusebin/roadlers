
import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';

import Card from '../../components/widgets/Card';
import CardServices from '../Drivers/CardServices';
import Footer from '../Landing/Footer';
import React from 'react';

import CarRental from '../../assets/images/car-rental.png';
import MonthlyFullTime from '../../assets/images/monthly-full-time.png';
import TravelServices from '../../assets/images/travel-pickup.png';
import Pickups from '../../assets/images/travel-pickup.png';
import LikeIcon from '../../assets/images/like-icon.png';
import '../Drivers/cardservices.css';
import './cart.css';


const Cart = () => {
  return (
      <div className="home">
        <NavBarHome />
        <SearchBar /> 
        <Card />
        <div className="related-container">
        <h2>Related Services</h2>
        <div className="related-line"></div>
        <div className="card-services-wrapper">
          <div className="card-services-container">
            <div className="card-services">
              <img src={CarRental} alt="car-rental" />
            </div>
            <p>Car Rental From ₦25,000</p>
            <div className="card-services-line"></div>
            <div className="card-services-box">
              <button>View Offer</button>
              <img src={LikeIcon} alt="like" />
            </div>
          </div>
          <div className="card-services-container">
            <div className="card-services">
              <img src={MonthlyFullTime} alt="full-time" />
            </div>
            <p>Monthly full-time driving service</p>
            <div className="card-services-line"></div>
            <div className="card-services-box">
              <button>Access Offer</button>
              <img src={LikeIcon} alt="like" />
            </div>
          </div>
          <div className="card-services-container">
            <div className="card-services">
              <img src={TravelServices} alt="travel-services" />
            </div>
            <p>Travel driving service</p>
            <div className="card-services-line"></div>
            <div className="card-services-box">
              <button>Access Offer</button>
              <img src={LikeIcon} alt="like" />
            </div>
          </div>
          <div className="card-services-container">
            <div className="card-services">
              <img src={Pickups} alt="pickups" />
            </div>
            <p>Airport Pickups</p>
            <div className="card-services-line"></div>
            <div className="card-services-box">
              <button>Learn More</button>
              <img src={LikeIcon} alt="like" />
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </div>
  )
};

export default Cart;

