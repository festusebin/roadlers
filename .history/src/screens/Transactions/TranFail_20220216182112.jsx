import React from 'react';
import NavBarHome from '../../components/NavBarHome';
import TransactionFail from '../../assets/images/transfail.png';
import Car from '../../assets/images/transcar.png';

import './transuccess.css';


const TranFail = () => {
  return (
    <div>
      <NavBarHome />
      <div className='tran-success'>
        <h2>Thank You!</h2>
        <div className="card-success">
          <img src={TransactionFail} />
          <button>View Your Booking Status</button>
        </div>
        <img className='car-trans' src={Car} alt="car-booking" />
      </div>
    </div>
  );
};


export default TranFail;
