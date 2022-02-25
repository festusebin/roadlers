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
          <img className='backward' src={Backward} />
          <img className='prev' src={Prev} alt="prev" />
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <img className='next' src={Next} alt="next" /></button>
          <button><img className='forward' src={Forward} alt="forward" /></button>
        </div>
      </div>
    </div>
  );
};


export default Pagination;
