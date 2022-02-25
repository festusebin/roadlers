import React from 'react';


const Element = (props) => {

  let content = props.name

  return (
    <div>
      <div>
        {content}
      </div>
    </div>
  );
};


export default Element;
