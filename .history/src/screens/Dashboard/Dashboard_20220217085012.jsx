import React from 'react';

import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';



import './dashboard.css';


const Dashboard = () => {
  return (
      <div>
        <NavBarHome />
      <SearchBar />
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
  )
};

export default Dashboard;
