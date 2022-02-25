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
          <div className="leftbar">
            <ul>
              <li><img class src={UserProfile} /> My Profile</li>
              <li><img class src={Wallet} /> My Wallet</li>
              <li><img class src={Bookings} /> My Bookings</li>
              <li><img class src={Referrals} /> Referral Bonus</li>
              <li><img class src={Offers} /> Special Offers</li>
              <li><img class src={TransactionHistory} /> Transaction History</li>
              <li><img class src={Notification} /> Notification</li>
            </ul>
        </div>
        <div className="line-side"></div>
      </div>
    </div>
  );
};


export default SideBar;
