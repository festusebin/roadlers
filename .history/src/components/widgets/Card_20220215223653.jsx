import React from 'react';

import '../css/card.css';

import Prado2020 from '../../assets/images/car-prado-2020.png';
import Marker from '../../assets/images/marker.png'; 
import Calendar from '../../assets/images/calendar.png';
import Time from '../../assets/images/time.png';
import DailyDriver from '../../assets/images/daily-driver.png'
import CaretDown from '../../assets/images/caret-down.svg';


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
          <div className='card-dropdown'> 3 days <img src={CaretDown} /></div>
          <p className='card-details___booking'> <img src={Calendar} /> 2/march/ 2023</p>
          <p className='card-time'><img src={Time} /> 8:00 am</p>
          <p className='card-text'>Within State</p>
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
        <div className="card-total">
          <h2>Sub-total</h2>
          <div className="card-line"></div>
          <p>₦48,000</p>
        </div>
      </div>
      <h2>T</h2>
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
        <div className="card-total">
          <h2>Sub-total</h2>
          <div className="card-line"></div>
          <p>₦48,000</p>
        </div>
      </div>
    </div>
  );
};


export default Card;
