import React from 'react';
import DriversIcon from '../../assets/images/drivers-icon-white.png';
import VehicleIcon from '../../assets/images/vehicle-owners.png';


const MoneySection = () => {
  return (
    <div>
      <h2>Make Money With Us</h2>
      <div className="money-line"></div>
      <div className="moneysection">
        <img src={DriversIcon} alt="drivers" />
        <div className="driver-section">
          <h1>Drivers</h1>
          <p>Are you a professional driver seeking to serve more clients? Join our team today as ther</p>
        </div>
      </div>
    </div>
  );
};


export default MoneySection;