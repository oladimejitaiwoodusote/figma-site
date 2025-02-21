import React from 'react'
import '../styles/Footer.css'
import { PiPlant } from "react-icons/pi";

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_left'>
            <div className='footer_logo-placeholder'>
                <PiPlant/>
            </div>
            <div className='footer_site-name'>
                <span>Plant</span>
                <span>Planet</span>
            </div>
        </div>
        <div className='footer_right'>
                <div className='footer_column'>
                    <span>Team</span>
                    <span>Services</span>
                    <span>Terms of use</span>
                </div>
                <div className='footer_column'>
                    <span>Gardening</span>
                    <span>Projects</span>
                    <span>Privacy Policy</span>
                </div>
                <div className='footer_column'>
                    <span>Edible</span>
                    <span>Affiliate</span>
                    <span>Contact us</span>
                </div>
        </div>
    </footer>
  )
}

export default Footer