import React from 'react';
import DashboardBar from '../../components/DashboardLayout/DashboardBar';

import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';



import './dashboard.css';


const Dashboard = () => {
  return (
      <div className='home'>
        <NavBarHome />
        <SearchBar />
        <DashboardBar />
        <My
      </div>
  )
};

export default Dashboard;

