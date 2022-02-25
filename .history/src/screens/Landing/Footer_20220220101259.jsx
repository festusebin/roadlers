import React from 'react';
import Logo from '../../assets/images/logo.png';
import SocialMedia from '../../assets/images/sosial media.png';
import Marker from '../../assets/images/marker.png';
import Call from '../../assets/images/call.png';

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
        <div className="footer-main">
          <div className="footer-column1">
            <h2>Car Rental in Lagos Nigeria</h2>
            <p>Want to visit us?</p>
            <div className="footer-visit">
              <span><img src={Marker} alt="location" /> 2nd Floor, Suite 205 Plot 1225 Bishop Oluwole Street, Victoria Island Lagos. (Edo House)</span>
            </div>
            <div className="footer-visit">
              <span><img src={Call} alt="phone" /> 2nd Floor, Suite 205 Plot 1225 Bishop Oluwole Street, Victoria Island Lagos. (Edo House)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
