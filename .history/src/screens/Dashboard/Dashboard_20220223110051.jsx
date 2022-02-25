import React from 'react';
import DashboardBar from '../../components/DashboardLayout/DashboardBar';

import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';
import DashboardCard from '../../components/widgets/DashboardCard';
import MyBooking from '../../components/widgets/MyBooking';



import './dashboard.css';


const Dashboard = () => {
  return (
      <div className='home'>
        <NavBarHome />
        <SearchBar />
        <DashboardBar />
        <MyBooking />
        <DashboardCard
      </div>
  )
};

export default Dashboard;

