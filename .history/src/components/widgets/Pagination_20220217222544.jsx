import React from 'react';

import '../css/pagination.css';


const Pagination = () => {
  return (
    <div>
      <ul className='pagination-container'>
        <li className='pagination-items'>
          <div className="arrow left" />
        </li>
        <li className='pagination-items'>
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
};


export default Pagination;
