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
          <img src={Special} alt="special-event" />
          <h3>Special Occasion Deals</h3>
          <p>Is it your special day? You can get 10% off Roadlers chauffeur service for your wedding, birthday, or other special events.</p>
          <button>Sign Up</button>
        </div>
        <div className="card-list">
          <img src={Special} alt="special-event" />
          <h3>Special Occasion Deals</h3>
          <p>Is it your special day? You can get 10% off Roadlers chauffeur service for your wedding, birthday, or other special events.</p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
