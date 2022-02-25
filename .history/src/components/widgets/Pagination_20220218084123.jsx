import React from 'react';

import Backward from '../../assets/images/backward.png';
import Prev from '../../assets/images/prev.png';
import Next from '../../assets/images/next.png';
import Forward from '../../assets/images/forward.png';
import '../css/pagination.css';


const Pagination = () => {
  return (
    <div>
      <div className='pagination-container'>
        <div className="pagination">
          <button><img className='backward' src={Backward} /></button>
          <button><img className='prev' src={Prev} alt="prev" /></button>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};


export default Pagination;
