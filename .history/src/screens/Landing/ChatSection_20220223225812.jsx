import React from 'react';

import Check from '../../assets/images/checkmark.png';
import CallCenter from '../../assets/images/call-center.png';

import './chatsection.css';

const ChatSection = () => {
  return (
    <div>
      <div className="chat-container">
        <div className="overlay">
          
        </div>
        <div className="chat-section">
          <div className="left">
            <h1><span>Whenever You Need Us,</span> We're Here For You.</h1>
            <p><img src={Check} alt="check-mark" />Airport pickups and travel</p>
            <p><img src={Check} alt="check-mark" />Make a special request</p>
            <p><img src={Check} alt="check-mark" />Ask more questions</p>
            <button>Chat Now</button>
          </div>
          <div className="right">
            <img src={CallCenter} alt="callcenter" />
          </div>
        </div>
        <h1 className='chat-heading'>Special Deals You Don't Want To Miss</h1>
      </div>
    </div>
  );
};


export default ChatSection;
