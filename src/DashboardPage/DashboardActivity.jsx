import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './DashboardActivity.css';
import NavSideBar from './NavSideBar';
import UserDetailsDashboard from '../DashboardPage/UserDetailsDashboard';
import CurrentJobsActivity from '../CurrentJobsPage/CurrentJobsActivity';
import PersonalDetailsActivity from '../PersonalDetailsPage/PersonalDetailsActivity';

const DashboardActivity = () => {
  return (
    <div className="div_dashboard">
      <NavSideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/user-details" replace />} />
          <Route path="/user-details" element={<UserDetailsDashboard />} />
          <Route path="/current-jobs" element={<CurrentJobsActivity />} />
          <Route path="/personal-details" element={<PersonalDetailsActivity />} />
        </Routes>
    </div>
  );
};

export default DashboardActivity;
