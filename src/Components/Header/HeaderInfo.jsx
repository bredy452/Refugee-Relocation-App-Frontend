import React from 'react'
import './_Header.scss'
import HeaderImage from './Header-Image/HeaderImageInfo'
import LogoBox from './Logo-Box/LogoBox'
import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
    <div>
      <LogoBox />
      <Navbar />
      <HeaderImage />
    </div>
  )
}

export default Header
