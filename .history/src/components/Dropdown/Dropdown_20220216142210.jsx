import React, { useState} from 'react';
import ProfileImg from '../../assets/images/profile-img.png';
import BookingImg from '../../assets/images/calendar.png';


const Dropdown = (props) => {

  const [display, setDisplay] = useState('none')

  const handleClick = () => {
    if (display == 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  return (
    <div>
      <div>
        <ul>
          <li><img src={ProfileImg} /> My Account</li>
          <li><img src={BookingImg} /></li>
        </ul>
      </div>
    </div>
  )
}

export { Dropdown }