import React, {useState,useEffect} from 'react'
import firebase from '../FIREBASE/firebase'
import CBITLOGO from '../assets/CBITLogo.png'
import 'boxicons'
import './NavSideBar.css'

const NavSideBar = () => {

    useEffect(() => {
        const handleButtonClick = () => {
          const sidebar = document.querySelector('.div_sidebar');
          sidebar.classList.toggle('active');
        };
    
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', handleButtonClick);
    
        return () => {
          btn.removeEventListener('click', handleButtonClick);
        };
      }, []);  

  return (
    <div className='div_sidebar'>
        <div className='div_logo_content'>
            <div className='side_logo'>
                <img src={CBITLOGO} alt='CBITLOGO' className='img_logo'/>
                <span className='logo_content_span01'>CBIT Careers</span>
            </div>
            <div className='side_logo_btn'>
              <i className='bx bx-menu' id='btn'></i>
            </div>
        </div>
        <ul className='ul_nav_list'>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Dashboard</span>
                </a>
                <span className='tooltip'>Dashboard</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Current Jobs</span>
                </a>
                <span className='tooltip'>Current Jobs</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Applied Jobs</span>
                </a>
                <span className='tooltip'>Applied Jobs</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Personal Details</span>
                </a>
                <span className='tooltip'>Personal Details</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Qualification Details</span>
                </a>
                <span className='tooltip'>Qualification Details</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Work Experience</span>
                </a>
                <span className='tooltip'>Work Experience</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Productivity Details</span>
                </a>
                <span className='tooltip'>Productivity Details</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Reference Details</span>
                </a>
                <span className='tooltip'>Reference Details</span>
            </li>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Documents Upload</span>
                </a>
                <span className='tooltip'>Documents Upload</span>
            </li>
        </ul>
    </div>
  )
}

export default NavSideBar;