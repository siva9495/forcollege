import React, { useState } from 'react';
import './UserLoginActivity.css';

const UserLoginActivity = () => {
  const [formType, setFormType] = useState('login'); // 'login', 'register', or 'forgot'

  return (
    <div className="userlogin_container">
      <div className="userlogin_logo_text">
        <img className="userlogin_logo_text_img" alt="Logo" />
        <span className="userlogin_logo_text_span01">CBIT CAREERS</span>
      </div>
      <div className="userlogin_text_login">
        <div className="userlogin_text">
          <span className="userlogin_text_span01">Dear Candidate,</span>
          <span className="userlogin_text_span02">Welcome to CBIT CAREERS</span>
          <span className="userlogin_text_span03">New Users:</span>
          <span className="userlogin_text_span04">
            <span id="userlogin_text_span04">
              Login with your personal email id for new registration
            </span>
          </span>
          <span className="userlogin_text_span05">Existing Users:</span>
          <span className="userlogin_text_span06">
            <span id="userlogin_text_span06">
              Login with the username (Email Id)
            </span>
          </span>
        </div>
        <div className="userlogin_login">
          <div className="userlogin_login_container"
            style={{
              height: formType === 'register' ? '450px' : '350px',
              overflowY: formType === 'register' ? 'auto' : 'hidden',
            }}
          >
            <div className="login_container_title">
              <span className="login_container_title_span01">
                {formType === 'login' && 'Login'}
                {formType === 'register' && 'Register'}
                {formType === 'forgot' && 'Forgot Password'}
              </span>
            </div>
            <div className="login_conatiner_email_password"
              style={{
                // height: formType === 'register' ? '80%' : '60%',
                overflowY: formType === 'register' ? 'auto' : 'hidden',
              }}
            >
              {formType === 'login' && (
                <>
                  <div className="login_fr01_inner01">
                    <span className="span_fr01_inner01">Email</span>
                    <input
                      className="input_fr01_inner01"
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="login_fr01_inner02">
                    <span className="span_fr01_inner02">Password</span>
                    <input
                      className="input_fr01_inner02"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                    />
                  </div>
                </>
              )}
              {formType === 'register' && (
                <>
                  <div className="login_fr01_inner01">
                    <span className="span_fr01_inner01">Name</span>
                    <input
                      className="input_fr01_inner01"
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="login_fr01_inner02">
                    <span className="span_fr01_inner02">Email</span>
                    <input
                      className="input_fr01_inner02"
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="login_fr01_inner03">
                    <span className="span_fr01_inner03">Password</span>
                    <input
                      className="input_fr01_inner03"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="login_fr01_inner04">
                    <span className="span_fr01_inner04">Confirm Password</span>
                    <input
                      className="input_fr01_inner04"
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </>
              )}
              {formType === 'forgot' && (
                <div className="login_fr01_inner01">
                  <span className="span_fr01_inner01">Email</span>
                  <input
                    className="input_fr01_inner01"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>
              )}
            </div>
            <div className="login_register_forgotpassword">
              {formType === 'login' && (
                <>
                  <span
                    className="login_register_span01"
                    onClick={() => setFormType('register')}
                  >
                    Register
                  </span>
                  <span
                    className="login_forgotpassword_span02"
                    onClick={() => setFormType('forgot')}
                  >
                    Forgot Password?
                  </span>
                </>
              )}
              {(formType === 'register' || formType === 'forgot') && (
                <span
                  className="login_register_span01"
                  onClick={() => setFormType('login')}
                >
                  Back to Login
                </span>
              )}
            </div>
            <div className="login_container_submit">
              <button className="login_container_submit_button">
                {formType === 'login' && 'Login'}
                {formType === 'register' && 'Register'}
                {formType === 'forgot' && 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginActivity;
