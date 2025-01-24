import React from 'react'
import { useState } from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }
  return (
    <div className='navBar'>
      <button className='hamburger' onClick={toggleMenu}>
        ☰
      </button>
      <nav className={menuOpen ? 'menu open' : 'menu'}>
        {' '}
        <ul>
          <li>
            {' '}
            <Link to='/' onClick={() => setMenuOpen(false)}>
              Home
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to='/search' onClick={() => setMenuOpen(false)}>
              Search
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to='/random' onClick={() => setMenuOpen(false)}>
              Get Random
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
