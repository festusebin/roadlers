import React from 'react';
import ProfileImg from '../../assets/images/profile-img.png';
import CaretDown from '../../assets/images/caret-down.svg';
import CartIconWhite from '../../assets/images/cart-white.svg';

import '../components/'


const SearchBar = () => {
  return (
    <div>
      <div className="filters">
        <form>
            <input type="text" placeholder='Search by car name, model, and category...' />
            <input type="text" placeholder='Pick-Up Location e.g. Lagos' />
            <button>Search</button>
          <button id="account">
            <img src={ProfileImg} /> 
              Account 
            <img src={CaretDown} /></button>
          <button id="account">
            <img src={CartIconWhite} /> Cart </button>
        </form>
          </div>
    </div>
  );
};


export default SearchBar;
