import React from 'react'
import './UserLoginActivity.css'

const UserLoginActivity = () => {
  return (
    <div className='userlogin_container'>
        <div className='userlogin_logo_text'>
            <img className='userlogin_logo_text_img'/>
            <span className='userlogin_logo_text_span01'>IST CAREERS</span>
        </div>
        <div className='userlogin_text_login'>
          <div className='userlogin_text'>
              <span className='userlogin_text_span01'>Dear Candidate,</span>
              <span className='userlogin_text_span02'>Welcome to IST CAREERS</span>
              <span className='userlogin_text_span03'>New Users:</span>
              <span className='userlogin_text_span04'><span id='userlogin_text_span04'>Login with your personal email id for new registration</span></span>
              <span className='userlogin_text_span05'>Existing Users</span>
              <span className='userlogin_text_span06'><span id='userlogin_text_span06'>Login with the username (Email Id)</span></span>
          </div>
          <div className='userlogin_login'>
              <div className='userlogin_login_container'>
                  <div className='login_container_title'>
                    <span className='login_container_title_span01'>Login</span>
                  </div>
                  <div className='login_conatiner_email_password'>
                    <div className='login_fr01_inner01'>
                        <span className='span_fr01_inner01'>Email</span>
                        <input className='input_fr01_inner01' type="text" name="email" placeholder="Enter Email"  />
                    </div>
                    <div className='login_fr01_inner02'>
                        <span className='span_fr01_inner02'>Password</span>
                        <input className='input_fr01_inner02' type="text" name="password" placeholder="Enter Password" />
                    </div>
                  </div>
                  <div className='login_container_submit'>
                    <button className='login_container_submit_button'>Login</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default UserLoginActivity;