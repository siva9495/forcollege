import React from 'react';
import {Router, Routes, Route, Navigate } from 'react-router-dom';
import './DashboardActivity.css';
import NavSideBar from './NavSideBar';
import HomePageActivity from '../LoginPage/HomePageActivity';
import UserDetailsDashboard from './UserDetailsDashboard';
import CurrentJobsActivity from '../CurrentJobsPage/CurrentJobsActivity';
import PersonalDetailsActivity from '../PersonalDetailsPage/PersonalDetailsActivity';
import LoginPage from '../LoginPage/AuthPage';
import AuthPage from '../LoginPage/AuthPage';
import CurrentJobs from '../CurrentJobsPage/CurrentJobs';

const DashboardActivity = () => {
  return (
    <div className="div_dashboard">
      {/* <NavSideBar /> */}
      {/* <UserDetailsDashboard /> */}
      {/* <HomePageActivity /> */}

    
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/current-jobs" element={<CurrentJobs />} />
      </Routes>
  
      
        {/* <Routes>
          <Route path="/" element={<Navigate to="/user-details" replace />} />
          <Route path="/user-details" element={<UserDetailsDashboard />} />
          <Route path="/current-jobs" element={<CurrentJobsActivity />} />
          <Route path="/personal-details" element={<PersonalDetailsActivity />} />
        </Routes> */}
    </div>
  );
};

export default DashboardActivity;
