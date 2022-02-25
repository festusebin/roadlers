import React from 'react';
import Special from '../../assets/images/special-events.png';
import Refer from '../../assets/images/refer-a-friend.png';
import Ride from '../../assets/images/ride-with-us.png';


const SpecialCard = () => {
  return (
    <div>
      <div className="card-list">
        <img src={Special} alt="special-event" />
        <h3>Special Occasion Deals</h3>
        <p>Is it your special day? You can get</p>
      </div>
    </div>
  );
};

export default SpecialCard;
