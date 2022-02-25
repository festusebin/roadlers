import React from 'react';
import Logo from '../../assets/images/logo.png';
import SocialMedia from '../../assets/images/soc'

import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-testimonial">
          <img src={Logo} alt="logo" />
          <p>Testimonials</p>
        </div>
      </div>
    </div>
  );
};


export default Footer;
