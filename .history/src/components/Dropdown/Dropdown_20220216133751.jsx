import React, { useState} from 'react';



const Dropdown = (props) => {

  const [display, setDisplay] = useState('none')
  return (
    <div>
      Sign-up
      {props.children}
    </div>
  )
}

export { Dropdown }