import React, { useState} from 'react';
import ProfileImg from '../../assets/images/profile-img.png';
import BookingImg from '../../assets/images/calendar.png';

import '../css/dropdown.css';


const options = [
  {
    id: 1,
    image: ProfileImg,
    text: "My Account"
  },
  {
    id: 2,
    image: BookingImg,
    text: "Booking"
  }
];


const Dropdown = () => {

  const [display, setDisplay] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  const toggling = () => setDisplay(!display);

  
  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setDisplay(false);
    console.log()
  }

  return (
    <div>
      <div className='dropdown'>
        <button className='sign-up' onClick={toggling}>Sign-up</button>
        {
          display && (
            <ul>
              <li><img src={image} /> {text}</li>
              <li><img src={image} /> {text}</li>
            </ul>
          )
        }
      </div>
    </div>
  )
}

export { Dropdown }