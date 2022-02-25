import React from 'react';
import Special from '../../assets/images/special-events.png';
import Refer from '../../assets/images/refer-a-friend.png';
import Ride from '../../assets/images/ride-with-us.png';

import './specialcard.css';


const SpecialCard = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card-list">
          <img src={Special} alt="special-event" />
          <h3>Special Occasion Deals</h3>
          <p>Is it your special day? You can get 10% off Roadlers chauffeur service for your wedding, birthday, or other special events.</p>
          <button>Sign Up</button>
        </div>
        <div className="card-list">
          <img src={Refer} alt="special-event" />
          <h3>Refer A Friend</h3>
          <p>For every paid referral you earn #1,000. You can use your cash for numerous offers, including a full-day driving service, car rental, and more.</p>
          <button>Sign Up</button>
        </div>
        <div className="card-list">
          <img src={Ride} alt="special-event" />
          <h3>ride With Us </h3>
          <p>Is it your special day? You can get 10% off Roadlers chauffeur service for your wedding, birthday, or other special events.</p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
