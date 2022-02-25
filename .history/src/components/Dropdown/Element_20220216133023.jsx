import React from 'react';
import ProfileImg from '../../assets/images/profile-img.png';
import BookingImg from '../../assets/images/calendar.png'


const Element = () => {
  return (
    <div>
      <div>
        <img src={ProfileImg} />My Account
      </div>
      <div>
        <img src={BookingImg} />Bookings
      </div>
    </div>
  )
}

export default element