import React from 'react';

import '../css/dashboardcard.css';

import Prado2020 from '../../assets/images/car-prado-2020.png';
import Marker from '../../assets/images/marker.png'; 
import Calendar from '../../assets/images/calendar.png';
import Time from '../../assets/images/time.png';
import DailyDriver from '../../assets/images/daily-driver.png';
import CaretDown from '../../assets/images/caret-down.svg';
import Mail from '../../assets/images/mailbox.png';

import BestPricing from '../../screens/Landing/BestPricing';

import '../css/dashboardcard.css';

const DashboardCard = () => {
  return (
    <div>
      <div id="card-group">
        <div className="card-name">
          <h2>Daily Driver</h2>
          <div className="card-line"></div>
          <p><span className='card-location'><img src={Marker} /></span>Plot 1225 Bishop Oluwole Street, Victorial Island, Lagos</p>
          <img src={DailyDriver} />
        </div>
        <div className="card-details">
          <h2>Booking Details</h2>
          <div className="card-line"></div>
          <div className='card-dropdown'> 3 days <img src={CaretDown} /></div>
          <p className='card-details___booking'> <img src={Calendar} /> 2/march/ 2023</p>
          <p className='card-time'><img src={Time} /> 8:00 am</p>
          <p className='card-text'>Within State</p>
          <button>Remove</button>
        </div>
        <div className="card-price">
          <h2>Price Per Day</h2>
          <div className="card-line"></div>
          <p>₦12,000</p>
        </div>
        </div>
    </div>
  );
};

export default DashboardCard;
