import React from 'react';

import Logo from '../../assets/images/logo-circle.png';

import NavBarHome from '../../components/NavBarHome';
import ProfileImg from '../../assets/images/profile-img.png';
import CaretDown from '../../assets/images/caret-down.svg';
import CartIconWhite from '../../assets/images/cart-white.svg';
import DailyDrivers from '../../assets/images/car-prado-page.png';
import LikeIcon from '../../assets/images/like-icon.png';
import ShareIcon from '../../assets/images/share-icon.png';
import Review from '../../assets/images/review.png';

import MarkerDark from '../../assets/images/marker-dark.png';
import CheckWhite from '../../assets/images/checkmark-white.png';

import './traveldriver.css';
import CardServices from './CardServices';
import Footer from '../Landing/Footer';
//import Card from '../../components/widgets/Card';




const TravelDriver = () => {
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
        <div className="card-booking">
          <div className="card-wrapper">
            <div className="card-section">
              <img className='driver' src={DailyDrivers} alt="drivers" />
              <img className='like' src={LikeIcon} alt="like" />
              <img className='share' src={ShareIcon} alt="share" />
              <button>₦75,000</button>
            </div>
            <div className="card-text">
              <h2>Prado (2020)</h2>
              <div className="card-text-line"></div>
              <div className="card-location">
                <img src={MarkerDark} alt="marker" />
                <span>Lagos</span>
              </div>
              <p>At Roadlers our SUV cars are from N50,000, all our prices are inclusive of fuel and chauffeurs within Lagos for a maximum.</p>
              <div className="card-review">
                <img src={Review} alt="review" />
                <button>Verified</button>
              </div>
            </div>
          </div>
          <div className="card-wrapper2">
            <h2>Start Booking - Let's Move</h2>
            <form>
              {/*<input type="text" placeholder='Pick-up Location:' />*/}
              <div>
                <p>Pick-up Location:</p>
                <img src={MarkerDark} alt="marker" />
              </div>
            </form>
            <div className="checkmark">
              <button className='box'><span>OK</span><img src={CheckWhite} alt="" /></button>
              <p>Press Enter</p>
            </div>
            <button>₦12,000</button>
            <div className="card-listing">
              <div className="card-box">
                <img src={Logo} alt="roadlers" />
                <h2>Roadlers</h2>
              </div>
              <h3>Listing Company</h3>
              <p>This vehicle is listed by Roadlers, accompanied by highly trained chauffeurs and dedicated customer care agents to meet your expectations. GSO Drive is a professional chauffeur company based in Lagos.</p>
            </div>
          </div>
        </div>
        <CardServices />
        <Footer />
      </div>
  )
};

export default TravelDriver;

