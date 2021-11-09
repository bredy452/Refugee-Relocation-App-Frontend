import React from 'react'
import './_about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="about_container">
      About <span>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  )
}

export default About
