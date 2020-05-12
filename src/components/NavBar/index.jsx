import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return (
    <>
      <nav className='sidebar' data-aos='fade-right'>
        <p><NavLink to='/'>Home</NavLink></p>
        <ul>
          <li><NavLink className='main-link' to='/articles'>All Articles</NavLink></li>
          <li><NavLink className='link' to='/articles'>Economics</NavLink></li>
          <li><NavLink className='link' to='/articles'>Leisure</NavLink></li>
          <li><NavLink className='link' to='/articles'>Lifestyle</NavLink></li>
          <li><NavLink className='link' to='/articles'>Politics</NavLink></li>
          <li><NavLink className='link' to='/articles'>Sports</NavLink></li>
          <li><NavLink className='link' to='/articles'>Tech</NavLink></li>
        </ul>
        <div className='sidebar contact'><h3>Contact us</h3></div>
      </nav>
    </>
  )
}

export default NavBar