import React, { useState} from 'react';


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
          <li><img</li>
        </ul>
      </div>
    </div>
  )
}

export { Dropdown }