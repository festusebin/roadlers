import React, { useState} from 'react';
import {}


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
    <div style={{display:display}}>
      Sign-up
      {props.children}
    </div>
  )
}

export { Dropdown }