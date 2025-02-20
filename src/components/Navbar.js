import React from 'react'
import '../styles/Navbar.css'
import { FaUserCircle } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        <div className='navbar_logo-placeholder'>
          <PiPlant/>
        </div>
        <div className='navbar_site-name'>  
          <span>Plant</span>
          <span>Planet</span>
        </div>
      </div>
      <div className='navbar_right'>
        <ul className='navbar_links'>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active-link": ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about_us" className={({isActive}) => isActive ? "active-link": ""}>
              About Us
            </NavLink>
          </li>
          <li>Shop By Category</li>
        </ul>
        <div className='navbar_avatar-group'>
          <div className='navbar-avatar'>
            <FaUserCircle/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar