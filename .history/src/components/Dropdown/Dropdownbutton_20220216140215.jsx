import React from 'react';


const DropdownButton = (props) => {

  let content = props.content;
  let handleClick = props.onClick;

  return (
    <div>
      <div>
        {content}
      </div>
    </div>
  );
};



export default DropdownButton;
