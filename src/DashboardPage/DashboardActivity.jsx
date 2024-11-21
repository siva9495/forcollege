import React from 'react'
import firebase from '../FIREBASE/firebase'
import './DashboardActivity.css'
import NavSideBar from './NavSideBar'
import UserDetailsDashboard from './UserDetailsDashboard'

const DashboardActivity = () => {
  return (
    <div className='div_dashboard'>
      <NavSideBar />
      <UserDetailsDashboard />
    </div>
  )
}

export default DashboardActivity;