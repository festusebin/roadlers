import React from 'react';
import NavBarHome from '../../components/NavBarHome';
import TransactionSuccessful from '../../assets/images/transuccess.png';
import Car from '../../assets/images/transcar.png';

import './'


const TranSuccess = () => {
  return (
    <div>
      <NavBarHome />
      <div>
        <h2>Thank You!</h2>
        <div className="card-success">
          <img src={TransactionSuccessful} />
          <button>View Your Booking Status</button>
        </div>
        <img src={Car} alt="car-booking" />
      </div>
    </div>
  );
};


export default TranSuccess;