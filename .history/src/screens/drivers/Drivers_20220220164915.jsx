import React from 'react';

import NavBarHome from '../../components/NavBarHome';
import ProfileImg from '../../assets/images/profile-img.png';
import CaretDown from '../../assets/images/caret-down.svg';
import CartIconWhite from '../../assets/images/cart-white.svg';
import Drivers from '../../assets/images/daily-driver.png';
import LikeIcon from '../../assets/images/like-icon.png';
import ShareIcon from '../../assets/images/share-icon.png';

import './drivers.css';
//import Card from '../../components/widgets/Card';




const Drivers = () => {
  return (
      <div className="home">
        <NavBarHome />
          <div className="filters">
            <form>
                <input type="text" placeholder='Search by car name, model, and category...' />
                <input type="text" placeholder='Pick-Up Location e.g. Lagos' />
                <button>Search</button>
              <button id="account">
                <img src={ProfileImg} /> 
                  Account 
                <img src={CaretDown} /></button>
              <button id="account">
                <img src={CartIconWhite} /> Cart </button>
            </form>
          </div>
        {/*<Card />*/}
        <div className="card-container">
          <div className="card-section">
            <img src={Drivers} alt="drivers" />
            <img src={LikeIcon} alt="like" />
            <img src={ShareIcon} alt="share" />
            <button>₦12,000</button>
        </div>
        <div className="card-text"></div>
        </div>
      </div>
  )
};

export default Drivers;

