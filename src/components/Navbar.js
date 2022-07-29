import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar_section">
        <Link to="/" className="logo">
          <img src='images/images.jpeg'alt='Kenyan flag icon' />       
        </Link>
        <div>
          
        </div>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>Home</Link>            
          </li>
          

          <li className='nav-item'>
            <Link to='/tours' className='nav-links'>Tours</Link>            
          </li>

          <li className='nav-item'>
            <Link to='/reviews' className='nav-links'>Reviews</Link>            
          </li>
          <li className='nav-item'>
            <Link to='/footer' className='nav-links'>Contact</Link>            
          </li>          

          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links'>Sign-up</Link>            
          </li>
        </ul>
      </nav>
      </React.Fragment>
  )
}

export default Navbar