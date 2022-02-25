import React from 'react';
import Logo from '../../assets/images/logo.png';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import Marker from '../../assets/images/marker.png';
import Call from '../../assets/images/phone.png';
import Map from '../../assets/images/map.png'

import './footer.css';

const Footer = () => {
  
  let year = new Date().getFullYear();


  return (
    <div>
      <div className="footer-container">
        <div className="footer-testimonial">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
            <p>Testimonials</p>
          </div>
          <div className="footer-social">
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-column1">
            <h2>Car Rental in Lagos Nigeria</h2>
            <p>Want to visit us?</p>
            <div className="footer-visit">
              <img src={Marker} alt="location" />
              <span>2nd Floor, Suite 205 Plot 1225 Bishop Oluwole Street, Victoria Island Lagos. (Edo House)</span>
            </div>
            <div className="footer-visit phone">
              <img src={Call} alt="phone" />
              <div className="footer-call">
                <small>(+234) 809 999 5947</small>
                <small>E-mail: info@gsofacility.com</small>
              </div>
            </div>
            <form>
              <div className=''>
                <label>Name:</label>
                <input type="text" />
              </div>
              <div>
                <label>Email:</label>
                <input type="text" />
              </div>
              <div>
                <label>Phone number:</label>
                <input type="text" />
              </div>
              <div>
                <label>Purpose:</label>
                <input type="text" />
              </div>
              <button>Book A Meeting</button>
            </form>
          </div>
          <div className="footer-column2">
            <img src={Map} alt="map" />
          </div>
          <div className="footer-column3">
            <form>
              
            </form>
          </div>
        </div>
        <div className="footer-header">
          <p>&#169; Copyright Roadlers Limited {year}</p>
        </div>
      </div>
    </div>
  );
};


export default Footer;
