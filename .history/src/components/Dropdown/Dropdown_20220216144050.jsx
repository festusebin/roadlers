import React, { useState} from 'react';
import ProfileImg from '../../assets/images/profile-img.png';
import BookingImg from '../../assets/images/calendar.png';

import '../css/dropdown.css';


const options = [
  {
    id: 1,
    image: ProfileImg,
    text
  }
];
const Dropdown = () => {

  const [display, setDisplay] = useState(false);
  const toggling = () => setDisplay(!display);


  return (
    <div>
      <div className='dropdown'>
        <button className='sign-up' onClick={toggling}>Sign-up</button>
        {
          display && (
            <ul>
              <li><img src={ProfileImg} /> My Account</li>
              <li><img src={BookingImg} /> Booking</li>
            </ul>
          )
        }
      </div>
    </div>
  )
}

export { Dropdown }