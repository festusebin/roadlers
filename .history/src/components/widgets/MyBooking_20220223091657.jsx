import React from 'react';



const MyBooking = () => {
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


export default MyBooking;
