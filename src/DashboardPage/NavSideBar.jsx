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
            <i className='bx bx-menu' id='btn'></i>
        </div>
        <ul className='ul_nav_list'>
            <li>
                <a>
                  <i className='bx bx-user'></i>
                  <span className='links_name'>Profile</span>
                </a>
                <span className='tooltip'>Profile</span>
            </li>
        </ul>
    </div>
  )
}

export default NavSideBar;