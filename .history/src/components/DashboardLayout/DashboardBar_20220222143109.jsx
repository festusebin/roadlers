import React from 'react';

import UserProfile from '../../assets/images/profile.png';
import Wallet from '../../assets/images/wallet.png';
import Bookings from '../../assets/images/bookings.png';
import Referrals from '../../assets/images/refeerals.png';
import Offers from '../../assets/images/offers.png';
import TransactionHistory from '../../assets/images/history.png';
import Notification from '../../assets/images/notification.png';

import '../css/dashboardbar.css';

const DashboardBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="line-top"></div>
        <div className="line-side"></div>
          <div className="leftbar">
            <p><img className='leftbar-img' src={UserProfile} /> My Profile</p>
            <p><img className='leftbar-img' src={Wallet} /> My Wallet</p>
            <p><img className='leftbar-img' src={Bookings} /> My Bookings</p>
            <p><img className='leftbar-img' src={Referrals} /> Referral Bonus</p>
            <p><img className='leftbar-img' src={Offers} /> Special Offers</p>
            <p><img className='leftbar-img' src={TransactionHistory} /> Transaction History</p>
            <p><img className='leftbar-img' src={Notification} /> Notification</p>
          </div>
          <div className="rightbar">
          <h2>My Wallet</h2>
            <div className="card-wallet">
              <h3>Current </h3>
            </div>
          </div>
      </div>
    </div>
  );
};


export default DashboardBar;
