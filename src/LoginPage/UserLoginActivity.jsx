import React from 'react'
import './UserLoginActivity.css'

const UserLoginActivity = () => {
  return (
    <div className='userlogin_container'>
        <div className='userlogin_logo_text'>

        </div>
        <div className='userlogin_text_login'>
          <div className='userlogin_text'>
              <span className='userlogin_text_span01'>Dear Candidate,</span>
              <span className='userlogin_text_span02'>Welcome to SRMIST CAREERS</span>
              <span className='userlogin_text_span03'>New Users:</span>
              <span className='userlogin_text_span04'>Login with your personal email id for new registration</span>
              <span className='userlogin_text_span05'>Existing Users</span>
              <span className='userlogin_text_span06'>Login with the username (Email Id)</span>
          </div>
          <div className='userlogin_login'>

          </div>
        </div>
    </div>
  )
}

export default UserLoginActivity;