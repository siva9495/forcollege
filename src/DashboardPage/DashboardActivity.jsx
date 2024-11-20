import React from 'react'
import firebase from '../FIREBASE/firebase'
import './DashboardActivity.css'
import NavSideBar from './NavSideBar'

const DashboardActivity = () => {
  return (
    <div className='div_dashboard'>
      <NavSideBar />
    </div>
  )
}

export default DashboardActivity;