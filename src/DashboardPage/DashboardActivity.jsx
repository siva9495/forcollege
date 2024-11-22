import React from 'react'
import firebase from '../FIREBASE/firebase'
import './DashboardActivity.css'
import NavSideBar from './NavSideBar'
import UserDetailsDashboard from './UserDetailsDashboard'
import CurrentJobsActivity from '../CurrentJobsPage/CurrentJobsActivity'

const DashboardActivity = () => {
  return (
    <div className='div_dashboard'>
      <NavSideBar />
      <CurrentJobsActivity />
    </div>
  )
}

export default DashboardActivity;