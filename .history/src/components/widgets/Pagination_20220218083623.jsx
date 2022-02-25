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
          <button><img src={Backward} /></button>
          <button>img</button>
        </div>
      </div>
    </div>
  );
};


export default Pagination;
