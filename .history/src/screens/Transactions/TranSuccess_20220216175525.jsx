import React from 'react';
import NavBarHome from '../../components/NavBarHome';
import TransactionSuccessful from '../../assets/'



const TranSuccess = () => {
  return (
    <div>
      <NavBarHome />
      <div>
        <h2>Thank You!</h2>
        <div className="card-success">
          <img src={TransactionSuccessful} />
        </div>
      </div>
    </div>
  );
};


export default TranSuccess;
