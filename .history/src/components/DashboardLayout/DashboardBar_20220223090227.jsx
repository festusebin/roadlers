import React from 'react';

import UserProfile from '../../assets/images/profile.png';
import Wallet from '../../assets/images/wallet.png';
import Bookings from '../../assets/images/bookings.png';
import Referrals from '../../assets/images/refeerals.png';
import Offers from '../../assets/images/offers.png';
import TransactionHistory from '../../assets/images/history.png';
import Notification from '../../assets/images/notification.png';
import Hide from '../../assets/images/hide.png';
import BitCoin from '../../assets/images/bitcoin.png';

import '../css/dashboardbar.css';

const DashboardBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="line-top"></div>
        <div className="line-side"></div>
          <div className="left-sidebar">
            <p><img className='leftbar-img' src={UserProfile} /> My Profile</p>
            <p><img className='leftbar-img' src={Wallet} /> My Wallet</p>
            <p><img className='leftbar-img' src={Bookings} /> My Bookings</p>
            <p><img className='leftbar-img' src={Referrals} /> Referral Bonus</p>
            <p><img className='leftbar-img' src={Offers} /> Special Offers</p>
            <p><img className='leftbar-img' src={TransactionHistory} /> Transaction History</p>
            <p><img className='leftbar-img' src={Notification} /> Notification</p>
          </div>
          <div className="rightbar-dashboard right-sidebar">
            <h2 className='mywallet'>My Wallet</h2>
              <div className="card-wallet">
                <h3>Current Balance</h3>
                <h2>Ehis O.</h2>
                <h1>₦225,000</h1>
                <h4>Customer ID: Temi118</h4>
              </div>
              <div className="button-wallet">
                <button>Top Up</button>
                <button>Transfer</button>
              </div>
              <button className="wallet-cart">GO - Cart</button>
              <button className="wallet-due">Due</button>
          </div>
          <div className="crypto-board">
            <img className='hide' src={Hide} alt="hide" />
            <h2>Crypto Wallet</h2>
            <div className="crypto-container">
              <div className="crypto-card">
                <h3>Current Balance</h3>
                <h2 className='usdt'>Bitcoin (BTC)</h2>
                <h1>0.005</h1>
                <h4>₦2,005,000</h4>
              </div>
              <div className="crypto-card">
                <h3>Current Balance</h3>
                <h2 className='usdt'>USDT Coin</h2>
                <h1>0.005</h1>
                <h4>₦150,000</h4>
              </div>
            </div>
            <button className="crypto-button">Top Up Your Wallet</button>
            <button className="crypto-transfer">Transfer</button>
            <div className="bitcoin">
              <img className='bitcoin' src={BitCoin} alt="bitcoin" />
          
            </div>
          </div>
      </div>
    </div>
  );
};


export default DashboardBar;
