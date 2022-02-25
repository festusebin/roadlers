import React from 'react';

import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';



import './dashboard.css';


const Dashboard = () => {
  return (
      <div className='home'>
        <NavBarHome />
        <SearchBar />
        <DashboardLayout />
      </div>
  )
};

export default Dashboard;
