import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-section'>      
      <div className='inner_section'>
        <div className='higher section'>
          <h4></h4>
          <ul>
            <li>P O Box</li>
            <li>154325-34 Nairobi, Kenya</li>
            <li>Office Location: Nairobi Kenya</li>
            <li>Kimathi Street, Opposite Kimathi Junction, 5th floor</li>
          
          </ul>
        </div>
        <div className='higher section'>
          <h4>Contact Us</h4>
          <ul>
            <li>Tembea Kenya</li>
            <li>Email: safaritours@live.com</li>
            <li>Phone : +254020287872</li>
            
          </ul>
        </div>
        <div className='higher section'>
          <h4>Other services</h4>
          <ul>
            <li>Tour car hiring</li>
            <li>Tour giding</li>
            <li>Pet dog hiring</li>
            
          </ul>
        </div>
        <div>
          <ul className='social'>
            
            <li>
              <a href='https://www.facebook.com/'><FaFacebookSquare /></a>
            </li>
            <li>
              <a href='https://twitter.com/'><FaTwitterSquare /></a>
            </li>
            <li>
              <a href='https://www.instagram.com/'><FaInstagramSquare /></a>
            </li>
            <li>
            <a href='linkedin.com'><FaLinkedin /></a>
            </li>
            
          </ul>
        </div>
      </div>
      
      <div className='lower_section'>        
        <p>Copyright © 2022 tembea kenya by Earnest Achayo. All rights reserved. | Privacy Policy | Terms of use</p>
      </div>
    </div>
  )
}

export default Footer