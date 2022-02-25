import React from 'react';
import DashboardBar from '../../components/DashboardLayout/DashboardBar';

import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';
import MyBooking from '../../components/widgets/MyBooking';



import './dashboard.css';


const Dashboard = () => {
  return (
      <div className='home'>
        <NavBarHome />
        <SearchBar />
        <DashboardBar />
        <MyBooking />
        <Dash
      </div>
  )
};

export default Dashboard;

