import React from 'react';
import NavBarHome from '../../components/NavBarHome';
import TransactionSuccessful from '../../assets/images/transuccess.png';
import Car from '../../assets/images/transcar.png';

import './transuccess.css';
import Footer from '../Landing/Footer';


const TranSuccess = () => {
  return (
    <div>
      <NavBarHome />
      <div className='tran-success'>
        <h2>Thank You!</h2>
        <div className="card-success">
          <img className='trans-image' src={TransactionSuccessful} />
          <button>View Your Booking Status</button>
        </div>
        <img className='car-trans' src={Car} alt="car-booking" />
      </div>
      /*<Footer />*/
    </div>
  );
};


export default TranSuccess;
