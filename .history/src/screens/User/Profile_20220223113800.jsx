import React from 'react';

import NavBarHome from '../../components/NavBarHome';
//import SearchBar from '../../components/SearchBar';
//import Header from '../../components/Header';
import SideBar from '../../components/DashboardLayout/SideBar';


import './user.css'

const Profile = () => {
  return (
      <div>
        <NavBarHome />
        <Header />
        {/*<SearchBar />*/}
        <SideBar />
      </div>
  )
};

export default Profile;

