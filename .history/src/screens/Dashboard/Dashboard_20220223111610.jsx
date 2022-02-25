import React from 'react';
import DashboardBar from '../../components/DashboardLayout/DashboardBar';

import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';
import DashboardCard from '../../components/widgets/DashboardCard';
import MyBooking from '../../components/widgets/MyBooking';
import Footer from '../Landing/Footer';


import './dashboard.css';


const Dashboard = () => {
  return (
      <div className='home'>
        <NavBarHome />
        <SearchBar />
        <DashboardBar />
        <MyBooking />
        <DashboardCard />
        <Footer />
      </div>
  )
};

export default Dashboard;

