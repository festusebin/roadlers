import React from 'react';
import ChickenRepublic from '../../assets/images/chicken-rep.png';
import Car from '../../assets/images/car.png';
import Money from '../../assets/images/money.png';
import './animation.css';


const Animation = () => {
  return (
    <div>
      <div id="landing-animation">
        <div className="trapezoid">
          <h2>Free Lunch</h2>
          <h3>In Your First 30 days</h3>
          <div className="animation-container">
            <img className='chicken' src={ChickenRepublic} alt="chicken" />
            <button>Learn More</button>
            <img class src={Money} alt="money" />
            <div className="animation-box">
              <h1>₦1,000</h1>
              <p>For Every Referral</p>
            </div>
            <img src={Car} alt="car" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Animation;
