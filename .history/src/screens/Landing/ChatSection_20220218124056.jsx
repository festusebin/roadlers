import React from 'react';

import Check from '../../assets/images/checkmark.png';
import CallCenter from '../../assets/images/call-center.png';



const ChatSection = () => {
  return (
    <div>
      <div className="chat-container">
        <div className="chat-section">
          <h1><span>Whenever You Need Us,</span> We're Here For You.</h1>
          <p><img src={Check} alt="check-mark" />Airport pickups and travel</p>
          <p><img src={Check} alt="check-mark" />Make a special request</p>
          <p><img src={Check} alt="check-mark" />Ask more questions</p>
          <button>Chat Now</button>
        </div>
        <img src={CallCenter} alt="callcenter" />
      </div>
    </div>
  );
};


export default ChatSection;
