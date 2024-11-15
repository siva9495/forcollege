import React from 'react'
import './HomePageActivity.css'
import NavbarLoginActivity from './NavbarLoginActivity';
import UserLoginActivity from './UserLoginActivity';

const HomePageActivity = () => {
  return (
    <div className='div_homepage_container'>
        <div className='div_homepage_navbar'>
            <NavbarLoginActivity/>
        </div>
        <div className='div_homepage_userlogin'>
            <div className='div_homepage_userlogin_container'>
                <UserLoginActivity/>
            </div>
        </div>
    </div>
  )
}

export default HomePageActivity;