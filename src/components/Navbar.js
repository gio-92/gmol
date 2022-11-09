import React from 'react'
import logo from '../img/logo-gmol.png'

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <img className='logo' src={logo} alt='logo GMOL' />
      </div>
    </nav>
  )
}

export default Navbar