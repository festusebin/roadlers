import React from 'react';

import Prado2020 from '../../assets/images/car-prado-2020.svg'; 
import '../css/card.css';

const Card = () => {
  return (
    <div>
      <div id="card-group">
        <div className="card-name">
          <h2>Prado (2020)</h2>
          <p>Plot 1225 Bishop Oluwole Street, Victorial Island, Lagos</p>
          <img stc={Prado2020} />
        </div>
      </div>
    </div>
  );
};


export default Card;
