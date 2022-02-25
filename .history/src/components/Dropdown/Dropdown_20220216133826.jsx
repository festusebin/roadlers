import React, { useState} from 'react';



const Dropdown = (props) => {

  const [display, setDisplay] = useState('none')

  const handleClick = () => {
    if (display == 'none')
  }
  return (
    <div>
      Sign-up
      {props.children}
    </div>
  )
}

export { Dropdown }