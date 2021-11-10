import React from 'react'
import About from './About/About'
import Section from './Section/Section'
import './_Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar_container">
      <About />
      <Section />
    </div>
  )
}

export default Navbar
