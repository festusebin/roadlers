import React from 'react';
import DashboardBar from '../../components/DashboardLayout/DashboardBar';
import SideBar from '../../components/DashboardLayout/SideBar';

import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';



import './dashboard.css';


const Dashboard = () => {
  return (
      <div className='home'>
        <NavBarHome />
        <SearchBar />
        <SideBar />
        <DashboardBar />
      </div>
  )
};

export default Dashboard;

