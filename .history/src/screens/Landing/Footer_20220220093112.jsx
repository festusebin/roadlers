import React from 'react';
import Logo from '../../assets/images/logo.png';

import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-testimonial">
          <img src={Logo} alt="logo" />
          
        </div>
      </div>
    </div>
  );
};


export default Footer;
