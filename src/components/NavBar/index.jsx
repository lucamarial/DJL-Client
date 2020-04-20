import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <p><NavLink to='/'>Home</NavLink></p>
        <ul>
          <li><NavLink to='/articles'>All Articles</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar