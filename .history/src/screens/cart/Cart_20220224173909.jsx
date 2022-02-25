
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

import './cart.css';


const Cart = () => {
  return (
      <div className="home">
        <NavBarHome />
        <SearchBar /> 
        <Card />
        <CardServices />
        <Footer />
      </div>
  )
};

export default Cart;

