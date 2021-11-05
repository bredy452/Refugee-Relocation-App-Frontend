import React from 'react'
import './header.scss'
import HeaderImage from './header-image/HeaderImage'
import LogoBox from './logo-box/LogoBox'
import Navbar from './navbar/Navbar'


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
