import React from 'react';



const SpecialCard = () => {
  return (
    <div>
      <div className="list">
        {
            driverData.map((driver, index) => (
                <div className="card bg" key={index}>
                    <img className='bg bg-img' src={driver.img} alt="image" />
                    <p className="name">{driver.name}</p>
                    <div className="details">{driver.description}
                    </div>
                    <div className="bottom">
                        <button>{driver.button}</button>
                    </div>
                </div>
            ))
        }
                </div>
    </div>
  );
};

export default SpecialCard;
