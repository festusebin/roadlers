import React from 'react';

import '../css/card.css';

import Prado2020 from '../../assets/images/car-prado-2020.png';
import Marker from '../../assets/images/marker.png'; 


const Card = () => {
  return (
    <div>
      <div id="card-group">
        <div className="card-name">
          <h2>Prado (2020)</h2>
          
          <p><span><img src={Marker} /></span>Plot 1225 Bishop Oluwole Street, Victorial Island, Lagos</p>
          <img src={Prado2020} />
        </div>
      </div>
    </div>
  );
};


export default Card;
