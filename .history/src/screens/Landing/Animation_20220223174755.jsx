import React from 'react';
import ChickenRepublic from '../../assets/images/chicken-rep.png';
import Car from '../../assets/images/car.png';
import Money from '../../assets/images/money.png';
import './animation.css';


const Animation = () => {
  return (
    <div>
      <div id="landing-animation">
        <div className="trapezoid-up">
          <h2>Free Lunch</h2>
          <h3>In Your First 30 days</h3>
          <div className="animation-container">
            <img src={ChickenRepublic} alt="chicken" />
            <button>Learn More</button>
            <div className="animation-box">
              <img src={Money} alt="money" />
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Animation;
