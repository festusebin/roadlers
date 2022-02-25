import React, { useState} from 'react';
import ProfileImg from '../../assets/images/profile-img.png';
import BookingImg from '../../assets/images/calendar.png';

import '../css/dropdown.css';


const Dropdown = (props) => {

  const [display, setDisplay] = useState(false);
  const toggling = () => setDisplay()

  const handleClick = () => {
    if (display == 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  return (
    <div>
      <div className='dropdown'>
        <button className='sign-up'>Sign-up</button>
        <ul>
          <li><img src={ProfileImg} /> My Account</li>
          <li><img src={BookingImg} /> Booking</li>
        </ul>
      </div>
    </div>
  )
}

export { Dropdown }