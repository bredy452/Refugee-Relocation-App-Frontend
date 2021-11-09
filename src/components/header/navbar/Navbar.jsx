import React from 'react'
import About from './about/About'
import Section from './section/Section'
import './_navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar_container">
      <About />
      <Section />
    </div>
  )
}

export default Navbar
