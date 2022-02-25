import React from 'react';

import UserProfile from '../../assets/images/profile.png';
import Wallet from '../../assets/images/wallet.png';
import Bookings from '../../assets/images/bookings.png';
import Referrals from '../../assets/images/refeerals.png';
import Offers from '../../assets/images/offers.png';
import TransactionHistory from '../../assets/images/history.png';
import Notification from '../../assets/images/notification.png';

import '../css/sidebar.css';

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="line-top"></div>
        <div className="line-side"></div>
          <div className="leftbar">
            <ul className=''>
              <li><img className='leftbar-img' src={UserProfile} /> My Profile</li>
              <li><img className='leftbar-img' src={Wallet} /> My Wallet</li>
              <li><img className='leftbar-img' src={Bookings} /> My Bookings</li>
              <li><img className='leftbar-img' src={Referrals} /> Referral Bonus</li>
              <li><img className='leftbar-img' src={Offers} /> Special Offers</li>
              <li><img className='leftbar-img' src={TransactionHistory} /> Transaction History</li>
              <li><img className='leftbar-img' src={Notification} /> Notification</li>
            </ul>
        </div>
      </div>
    </div>
  );
};


export default SideBar;
