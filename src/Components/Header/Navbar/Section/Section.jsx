import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './_Section.scss'

const Section = () => {
  return (
    <div className="section_container">
      Section <span>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  )
}

export default Section
