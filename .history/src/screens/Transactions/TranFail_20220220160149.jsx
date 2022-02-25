import React from 'react';
import NavBarHome from '../../components/NavBarHome';
import TransactionFail from '../../assets/images/transfail.png';
import Car from '../../assets/images/transcar.png';

import './transuccess.css';
import Footer from '../Landing/Footer';


const TranFail = () => {
  return (
    <div>
      <NavBarHome />
      <div className='tran-success'>
        <h2>Something Went Wrong</h2>
        <div className="card-success">
          <img className='trans-image' src={TransactionFail} />
          <button>View Your Booking Status</button>
        </div>
        <img className='car-trans' src={Car} alt="car-booking" />
      </div>
      <Footer />
    </div>
  );
};


export default TranFail;
