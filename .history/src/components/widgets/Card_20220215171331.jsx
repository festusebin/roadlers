import React from 'react';

import '../css/card.css';

import Prado2020 from '../../assets/images/car-prado-2020.png';
import Marker from '../../assets/images/marker.png'; 
import Calendar from '../../assets/images/calendar.png';
import Time from '../../assets/images/time.png';


const Card = () => {
  return (
    <div>
      <div id="card-group">
        <div className="card-name">
          <h2>Prado (2020)</h2>
          <div className="card-line"></div>
          <p><span className='card-location'><img src={Marker} /></span>Plot 1225 Bishop Oluwole Street, Victorial Island, Lagos</p>
          <img src={Prado2020} />
        </div>
        <div className="card-details">
          <h2>Booking Details</h2>
          <div className="card-line"></div>
          <div className='card-dropdown'></div>
          <p className='card-'><img src={Calendar} /> 2/march/ 2023</p>
          <p><img src={Time} /> 8:00 am</p>
          <p>Within State</p>
          <button>Remove</button>
        </div>
        <div className="card-price">
          <h2>Price Per Day</h2>
          <div className="card-line"></div>
          <p>₦75,000</p>
        </div>
        <div className="card-total">
          <h2>Sub-total</h2>
          <div className="card-line"></div>
          <p>₦225,000</p>
        </div>
      </div>
    </div>
  );
};


export default Card;
