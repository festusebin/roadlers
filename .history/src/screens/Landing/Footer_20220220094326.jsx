import React from 'react';
import Logo from '../../assets/images/logo.png';
import SocialMedia from '../../assets/images/sosial media.png';

import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-testimonial">
          <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <p>Testimonials</p>
          </div>
          <img src={SocialMedia} alt="socials" />
        </div>
      </div>
    </div>
  );
};


export default Footer;
